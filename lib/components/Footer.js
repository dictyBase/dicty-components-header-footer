"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _rebass = require("rebass");

var _FooterContainer = require("../styles/footer/FooterContainer");

var _FooterContainer2 = _interopRequireDefault(_FooterContainer);

var _FooterItemsHeader = require("../styles/footer/FooterItemsHeader");

var _FooterItemsHeader2 = _interopRequireDefault(_FooterItemsHeader);

var _FooterLink = require("../styles/footer/FooterLink");

var _FooterLink2 = _interopRequireDefault(_FooterLink);

var _FooterItemsContainer = require("../styles/footer/FooterItemsContainer");

var _FooterItemsContainer2 = _interopRequireDefault(_FooterItemsContainer);

var _FooterItem = require("../styles/footer/FooterItem");

var _FooterItem2 = _interopRequireDefault(_FooterItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var footerItems = function footerItems(items) {
  return items.map(function (c, i) {
    return _react2.default.createElement(
      _FooterItem2.default,
      { key: i, m: 0, p: 1 },
      _react2.default.createElement(
        _FooterLink2.default,
        { href: c.link, color: "#d8d8d8", fontSize: 11 },
        c.description
      )
    );
  });
};


var footerSubSections = function footerSubSections(items) {
  return items.map(function (c, i) {
    return _react2.default.createElement(
      _rebass.Box,
      { key: i, p: 10 },
      _react2.default.createElement(
        _FooterItemsHeader2.default,
        { p: 0 },
        _react2.default.createElement(
          _FooterLink2.default,
          { href: c.header.link, color: "#ccffcc", fontSize: 14 },
          c.header.description
        )
      ),
      _react2.default.createElement(
        _FooterItemsContainer2.default,
        { m: 0, p: 0 },
        footerItems(c.items)
      )
    );
  });
};

var footerSections = function footerSections(items) {
  var fraction = 1 / (items.length + 2);
  return items.map(function (c, i) {
    return _react2.default.createElement(
      _rebass.Box,
      { width: fraction, key: i },
      footerSubSections(c)
    );
  });
};

var theme = {
  breakpoints: [40, 52, 64],
  font: "helvetica,arial,sans-serif",
  background: "linear-gradient(#15317E, #0099FF)"

  /**
   * The `Footer` component that will be displayed
   * at the bottom of every react web application of [dictyBase](http://dictybase.org).
   */
};var Footer = function Footer(_ref) {
  var items = _ref.items;
  return _react2.default.createElement(
    _rebass.Provider,
    { theme: theme },
    _react2.default.createElement(
      _FooterContainer2.default,
      {
        width: 1,
        justify: "center",
        align: ["center", "left", "left"],
        direction: ["column", "row", "row"] },
      footerSections(items)
    )
  );
};

exports.default = Footer;
module.exports = exports["default"];