// credits: https://github.com/keplersj/jest-raw-loader/blob/master/index.js
module.exports = {
  process: (content) => "module.exports = " + JSON.stringify(content),
};
