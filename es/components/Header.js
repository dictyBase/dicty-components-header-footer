function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import logo from "../images/logo.png";
import Link from "../styles/Link";
import { headerStyles as styles } from "../styles/headerStyles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Grow from "@material-ui/core/Grow";
import Search from "@material-ui/icons/Search";

// set base URL for homepage
var Home = "http://dictybase.org";

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every React web application of [dictyBase](http://dictybase.org).
 */

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isExpanded: false
    }, _this.onClick = function () {
      _this.setState({ isExpanded: !_this.state.isExpanded });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Header.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        _props$home = _props.home,
        home = _props$home === undefined ? Home : _props$home,
        children = _props.children,
        items = _props.items;
    var isExpanded = this.state.isExpanded;

    return React.createElement(
      Grid,
      { container: true, spacing: 8, className: classes.root },
      React.createElement(
        Grid,
        {
          item: true,
          xs: 12,
          sm: 5,
          md: 3,
          lg: 3,
          className: classes.logoContainer },
        React.createElement(
          Link,
          { href: home },
          React.createElement("img", { src: logo, alt: "dictyBase logo", className: classes.image })
        )
      ),
      !isExpanded && React.createElement(
        Grid,
        {
          item: true,
          xs: 12,
          sm: 7,
          md: 5,
          lg: 5,
          className: classes.searchContainer },
        React.createElement(
          FormControl,
          { className: classes.textField },
          React.createElement(
            InputLabel,
            { htmlFor: "guided-search" },
            "Guided Search"
          ),
          React.createElement(Input, {
            id: "input-with-icon-adornment",
            onClick: this.onClick,
            endAdornment: React.createElement(
              InputAdornment,
              { position: "end" },
              React.createElement(Search, null)
            )
          })
        )
      ),
      isExpanded && React.createElement(
        Grow,
        { "in": isExpanded, timeout: 500, style: { opacity: 1 } },
        React.createElement(
          Grid,
          {
            item: true,
            xs: 12,
            sm: 7,
            md: 5,
            lg: 5,
            className: classes.searchContainer },
          React.createElement(
            FormControl,
            { className: classes.textFieldExpanded },
            React.createElement(
              InputLabel,
              { htmlFor: "guided-search" },
              "Guided Search"
            ),
            React.createElement(Input, {
              id: "input-with-icon-adornment",
              autoFocus: true,
              endAdornment: React.createElement(
                InputAdornment,
                { position: "end" },
                React.createElement(Search, null)
              )
            })
          )
        )
      ),
      React.createElement(
        Grid,
        {
          item: true,
          xs: 12,
          sm: 12,
          md: 4,
          lg: 4,
          className: classes.linkContainer },
        children(items)
      )
    );
  };

  return Header;
}(Component);

export default withStyles(styles)(Header);