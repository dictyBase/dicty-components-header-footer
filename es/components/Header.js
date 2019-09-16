import React, { useState } from "react";
import logo from "../images/logo.png";
import Link from "../styles/Link";
import { headerStyles as styles } from "../styles/headerStyles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpandedSearch from "./ExpandedSearch";
import NormalSearch from "./NormalSearch";

// set base URL for homepage
var Home = "/";

/**
 * The `Header` component that will be displayed
 * on top of the navigation bar in every React web application of [dictyBase](http://dictybase.org).
 */

var Header = function Header(props) {
  var _useState = useState(false),
      isExpanded = _useState[0],
      setIsExpanded = _useState[1];

  var classes = props.classes,
      _props$home = props.home,
      home = _props$home === undefined ? Home : _props$home,
      children = props.children,
      items = props.items;


  var handleClick = function handleClick() {
    setIsExpanded(!isExpanded);
  };

  return React.createElement(
    Grid,
    { container: true, className: classes.root },
    React.createElement(
      Grid,
      { item: true, xs: 12, sm: 5, md: 3, lg: 4, className: classes.logoContainer },
      React.createElement(
        Grid,
        { container: true, alignItems: "flex-start" },
        React.createElement(
          Grid,
          { item: true, xs: 12, className: classes.left },
          React.createElement(
            Link,
            { href: home },
            React.createElement("img", { src: logo, alt: "dictyBase logo", className: classes.image })
          ),
          React.createElement(
            "span",
            { className: classes.dcr },
            React.createElement(
              "em",
              null,
              "Dicty Community Resource"
            )
          )
        )
      )
    ),
    isExpanded ? React.createElement(ExpandedSearch, { isExpanded: isExpanded }) : React.createElement(NormalSearch, { handleClick: handleClick }),
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

export default withStyles(styles)(Header);