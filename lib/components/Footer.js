"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _FooterStyles = require("../styles/FooterStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `Footer` component that will be displayed
 * at the bottom of every React web application of [dictyBase](http://dictybase.org).
 */

var Footer = function Footer(props) {
  var classes = props.classes,
      items = props.items;


  var footerItems = function footerItems(items) {
    return items.map(function (c, i) {
      return _react2.default.createElement(
        "li",
        { key: i, className: classes.listItem },
        _react2.default.createElement(
          "a",
          { href: c.link, className: classes.link },
          c.description
        )
      );
    });
  };

  var footerSubSections = function footerSubSections(items) {
    return items.map(function (c, i) {
      return _react2.default.createElement(
        "div",
        { key: i, className: classes.subsectionItem },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "ul",
            { className: classes.headerLink },
            _react2.default.createElement(
              "div",
              { className: classes.ulHeader },
              c.header.description
            )
          )
        ),
        _react2.default.createElement(
          "ul",
          { className: classes.listItem },
          footerItems(c.items)
        )
      );
    });
  };

  var footerSections = function footerSections(items) {
    return items.map(function (c, i) {
      return _react2.default.createElement(
        _Grid2.default,
        { item: true, key: i, className: classes.gridItem },
        footerSubSections(c)
      );
    });
  };

  return _react2.default.createElement(
    _Grid2.default,
    { container: true, className: classes.root, justify: "center" },
    footerSections(items)
  );
};

exports.default = (0, _styles.withStyles)(_FooterStyles.FooterStyles)(Footer);
module.exports = exports["default"];