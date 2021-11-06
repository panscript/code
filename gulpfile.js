"use strict";

const gulp = require("gulp");
const path = require("path");
const rimraf = require("rimraf");
const glob = require("glob");
const child = require("child_process");
const prettier = require("gulp-prettier");
const eslint = require("gulp-eslint");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const browserSync = require("browser-sync").create();
const jest = require("jest");

const SRC = "src";
const BUILD = "docs";
const STATIC = "static";

// Clean
const clean = gulp.parallel(cleanParsers, cleanBuild);

function cleanParsers(callback) {
  if (process.argv.includes("--no-java")) {
    return callback();
  }

  rimraf(path.join(__dirname, SRC, "languages", "**", "generated"), callback);
}

function cleanBuild(callback) {
  rimraf(path.join(__dirname, BUILD, "**", "*"), callback);
}

// Build
const build = gulp.series(clean, compileParsers, bundleCode, copyStatic);

function compileParsers(callback) {
  if (process.argv.includes("--no-java")) {
    return callback();
  }

  const antlrJarFile = glob.sync(
    path.join(__dirname, "node_modules", "antlr4ts-cli", "target", "*.jar"),
  );
  const languageFolders = glob.sync(path.join(__dirname, SRC, "languages", "*/"));

  languageFolders.map((languageFolder) => {
    const language = path.basename(languageFolder);

    // generate lexer and parser
    child
      .spawn(
        "java",
        [
          "-cp",
          antlrJarFile,
          "org.antlr.v4.Tool",
          "-Dlanguage=TypeScript",
          "-visitor",
          "-no-listener",
          "-lib",
          path.join(__dirname, SRC, "languages", "common"),
          "-o",
          path.join(__dirname, SRC, "languages", language, "generated"),
          path.join(__dirname, SRC, "languages", language, "*.g4"),
        ],
        {
          stdio: "inherit",
        },
      )
      .on("close", (code) => {
        process.exitCode = code;
        callback();
      });
  });
}

function bundleCode() {
  return gulp
    .src(path.join(__dirname, SRC, "index.tsx"))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(BUILD));
}

function copyStatic() {
  return gulp.src([path.join(__dirname, SRC, STATIC, "**", "*")]).pipe(gulp.dest(BUILD));
}

// Dev
const dev = gulp.series(build, gulp.parallel(serve, watch));

function serve(callback) {
  browserSync.init({
    server: {
      baseDir: BUILD,
    },
  });
  callback();
}

function watch() {
  gulp.watch([path.posix.join(SRC, "**", "*.g4")], gulp.series(compileParsers, bundleCode, reload));
  gulp.watch([path.posix.join(SRC, STATIC, "**", "*")], gulp.series(copyStatic, reload));
  gulp.watch(
    [
      path.posix.join(SRC, "**", "!(*.test).{ts,tsx,js,css,pan}"),
      "!" + path.posix.join(SRC, "**", "generated", "*"),
    ],
    gulp.series(bundleCode, reload),
  );
}

function reload(callback) {
  browserSync.reload();
  callback();
}

// QA
const qa = gulp.series(formatCode, lintCode, cleanParsers, compileParsers, runTests);

function formatCode() {
  return gulp
    .src([path.join(__dirname, SRC, "**", "*.{ts,tsx,js}"), path.join(__dirname, "*.js")])
    .pipe(prettier())
    .pipe(gulp.dest((file) => file.base));
}

function lintCode() {
  return gulp
    .src([
      path.join(__dirname, SRC, "**", "*.{ts,tsx}"),
      "!" + path.join(SRC, "**", "generated", "*"),
    ])
    .pipe(eslint())
    .pipe(eslint.format());
}

async function runTests(callback) {
  await jest.runCLI({ noStackTrace: true }, [path.resolve(__dirname)]);
  callback();
}

exports.clean = clean;
exports.build = build;
exports.dev = dev;
exports.qa = qa;
