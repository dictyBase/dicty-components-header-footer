"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  background: ", ";\n"], ["\n  background: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rebass = require("rebass");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ContainerStyle = (0, _styledComponents2.default)(_rebass.Flex)(_templateObject, function (props) {
  return props.theme.background ? props.theme.background : "linear-gradient(#15317E, #0099FF)";
});

var FooterContainer = function FooterContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react2.default.createElement(
    ContainerStyle,
    props,
    children
  );
};

exports.default = FooterContainer;
module.exports = exports["default"];