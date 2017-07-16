"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var LinksContainerStyle = _styledComponents2.default.div(_templateObject);

var LinksContainer = function LinksContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react2.default.createElement(
    LinksContainerStyle,
    props,
    children
  );
};

exports.default = LinksContainer;
module.exports = exports["default"];