function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FooterStyles as styles } from "../styles/FooterStyles";

/**
 * The `Footer` component that will be displayed
 * at the bottom of every React web application of [dictyBase](http://dictybase.org).
 */

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.footerItems = function (items) {
      var classes = _this.props.classes;

      return items.map(function (c, i) {
        return React.createElement(
          "li",
          { key: i, className: classes.listItem },
          React.createElement(
            "a",
            { href: c.link, className: classes.link },
            c.description
          )
        );
      });
    }, _this.footerSubSections = function (items) {
      var classes = _this.props.classes;

      return items.map(function (c, i) {
        return React.createElement(
          "div",
          { key: i, className: classes.subsectionItem },
          React.createElement(
            "div",
            null,
            React.createElement(
              "ul",
              { className: classes.headerLink },
              React.createElement(
                "div",
                { className: classes.ulHeader },
                c.header.description
              )
            )
          ),
          React.createElement(
            "ul",
            { className: classes.listItem },
            _this.footerItems(c.items)
          )
        );
      });
    }, _this.footerSections = function (items) {
      var classes = _this.props.classes;

      return items.map(function (c, i) {
        return React.createElement(
          Grid,
          { item: true, key: i, className: classes.gridItem },
          _this.footerSubSections(c)
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Footer.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        items = _props.items;

    return React.createElement(
      Grid,
      { container: true, className: classes.root, justify: "center" },
      this.footerSections(items)
    );
  };

  return Footer;
}(Component);

export default withStyles(styles)(Footer);