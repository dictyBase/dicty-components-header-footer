"use strict";

exports.__esModule = true;
exports.HeaderLink = exports.Footer = exports.Header = undefined;

var _Header = require("./components/Header");

Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

var _Footer = require("./components/Footer");

Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Footer).default;
  }
});

var _Link = require("./styles/Link");

Object.defineProperty(exports, "HeaderLink", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Link).default;
  }
});

require("fontsource-roboto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }