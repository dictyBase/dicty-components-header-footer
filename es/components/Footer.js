import React from "react";
import { Provider, Box } from "rebass";
import FooterContainer from "../styles/footer/FooterContainer";
import FooterItemsHeader from "../styles/footer/FooterItemsHeader";
import FooterLink from "../styles/footer/FooterLink";
import FooterItemsContainer from "../styles/footer/FooterItemsContainer";
import FooterItem from "../styles/footer/FooterItem";

var footerItems = function footerItems(items) {
  return items.map(function (c, i) {
    return React.createElement(
      FooterItem,
      { key: i, m: 0, p: 1 },
      React.createElement(
        FooterLink,
        { href: c.link, color: "#d8d8d8", fontSize: 11 },
        c.description
      )
    );
  });
};

var footerSubSections = function footerSubSections(items) {
  return items.map(function (c, i) {
    return React.createElement(
      Box,
      { key: i, p: 10 },
      React.createElement(
        FooterItemsHeader,
        { p: 0 },
        React.createElement(
          FooterLink,
          { href: c.header.link, color: "#ccffcc", fontSize: 14 },
          c.header.description
        )
      ),
      React.createElement(
        FooterItemsContainer,
        { m: 0, p: 0 },
        footerItems(c.items)
      )
    );
  });
};

var footerSections = function footerSections(items) {
  var fraction = 1 / (items.length + 2);
  return items.map(function (c, i) {
    return React.createElement(
      Box,
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
  return React.createElement(
    Provider,
    { theme: theme },
    React.createElement(
      FooterContainer,
      {
        width: 1,
        mt: 50,
        justify: "center",
        align: ["center", "left", "left"],
        direction: ["column", "row", "row"] },
      footerSections(items)
    )
  );
};

export default Footer;