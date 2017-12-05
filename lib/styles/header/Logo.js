"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 50%;\n  display: flex;\n  justify-content: flex-start;\n  height: 100px;\n  align-items: flex-end;\n  flex-basis: calc(33.33333333333333% - 8px);\n\n  @media only screen and (max-width: 800px) {\n    display: flex;\n    flex-basis: 100%;\n    align-items: flex-end;\n    justify-content: center;\n    order: initial;\n  }\n"], ["\n  width: 50%;\n  display: flex;\n  justify-content: flex-start;\n  height: 100px;\n  align-items: flex-end;\n  flex-basis: calc(33.33333333333333% - 8px);\n\n  @media only screen and (max-width: 800px) {\n    display: flex;\n    flex-basis: 100%;\n    align-items: flex-end;\n    justify-content: center;\n    order: initial;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LogoStyle = _styledComponents2.default.div(_templateObject);
var Logo = function Logo(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react2.default.createElement(
    LogoStyle,
    props,
    children
  );
};

exports.default = Logo;
module.exports = exports["default"];