"use strict";

module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "\\.test\\.tsx?$",
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.css$": "jest-css-modules-transform",
    "\\.pan$": "<rootDir>/jest-load-raw.js",
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ["tsx", "ts", "jsx", "js"],
  setupFiles: ["jest-canvas-mock"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  clearMocks: true,
};
