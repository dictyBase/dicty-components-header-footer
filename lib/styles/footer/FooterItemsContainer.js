"use strict";

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  @media (max-width: 40em) : {\n    textAlign: center;\n  }\n  ", ";\n"], ["\n  list-style: none;\n  @media (max-width: 40em) : {\n    textAlign: center;\n  }\n  ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ContainerStyle = _styledComponents2.default.ul(_templateObject, _styledSystem.space);

var FooterItemsContainer = function FooterItemsContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react2.default.createElement(
    ContainerStyle,
    props,
    children
  );
};

exports.default = FooterItemsContainer;
module.exports = exports["default"];