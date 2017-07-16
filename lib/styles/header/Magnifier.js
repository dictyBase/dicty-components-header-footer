"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 7px;\n  cursor: not-allowed;\n  border: 1px solid rgb(204, 204, 204);\n  border-width: 1px 1px 1px 0px;\n  border-color: rgb(204, 204, 204);\n  border-style: solid;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n"], ["\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 7px;\n  cursor: not-allowed;\n  border: 1px solid rgb(204, 204, 204);\n  border-width: 1px 1px 1px 0px;\n  border-color: rgb(204, 204, 204);\n  border-style: solid;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MagnifierStyle = _styledComponents2.default.div(_templateObject);

var Magnifier = function Magnifier(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react2.default.createElement(
    MagnifierStyle,
    props,
    children
  );
};

exports.default = Magnifier;
module.exports = exports["default"];