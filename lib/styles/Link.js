"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LinkStyle = (0, _styles.styled)("a")({
  color: "#004080",
  padding: "15px",
  textDecoration: "none"
});

var Link = function Link(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react2.default.createElement(
    LinkStyle,
    props,
    children
  );
};

exports.default = Link;
module.exports = exports["default"];