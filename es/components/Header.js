import React from "react";

import logo from "../images/logo.png";
import { Container, Img, Link, LinksContainer, Logo, Magnifier, Right, SearchBar, SearchContainer } from "../styles/header";

// $FlowFixMe
import "font-awesome/css/font-awesome.min.css";

import FontAwesome from "react-fontawesome";

var Home = "http://dictybase.org";

//const headerItems = (items: Array<ItemType>) =>
//items.map((link, i) => (
//<Link key={i} href={link.url}>
//<FontAwesome name={link.icon} /> {link.text}
//</Link>
//))

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
var Header = function Header(_ref) {
  var children = _ref.children,
      items = _ref.items,
      _ref$home = _ref.home,
      home = _ref$home === undefined ? Home : _ref$home;

  return React.createElement(
    Container,
    null,
    React.createElement(
      Logo,
      null,
      React.createElement(
        Link,
        { href: home },
        React.createElement(Img, { src: logo })
      )
    ),
    React.createElement(
      Right,
      null,
      React.createElement(
        LinksContainer,
        null,
        children(items)
      ),
      React.createElement(
        SearchContainer,
        null,
        React.createElement(SearchBar, { placeholder: "Guided Search (coming soon)", disabled: true }),
        React.createElement(
          Magnifier,
          null,
          React.createElement(FontAwesome, { name: "search" })
        )
      )
    )
  );
};

export default Header;