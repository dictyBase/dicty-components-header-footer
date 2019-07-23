import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FooterStyles as styles } from "../styles/FooterStyles";

/**
 * The `Footer` component that will be displayed
 * at the bottom of every React web application of [dictyBase](http://dictybase.org).
 */

var Footer = function Footer(props) {
  var classes = props.classes,
      items = props.items;


  var footerItems = function footerItems(items) {
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
  };

  var footerSubSections = function footerSubSections(items) {
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
          footerItems(c.items)
        )
      );
    });
  };

  var footerSections = function footerSections(items) {
    return items.map(function (c, i) {
      return React.createElement(
        Grid,
        { item: true, key: i, className: classes.gridItem },
        footerSubSections(c)
      );
    });
  };

  return React.createElement(
    Grid,
    { container: true, className: classes.root, justify: "center" },
    footerSections(items)
  );
};

export default withStyles(styles)(Footer);