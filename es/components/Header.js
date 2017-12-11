import React from "react";
import logo from "../images/logo.png";
import { Container, Img, Link, LinksContainer, Logo, Magnifier, Right, SearchBar, SearchContainer } from "../styles/header";

// $FlowFixMe
import "font-awesome/css/font-awesome.min.css";

import FontAwesome from "react-fontawesome";

var Home = "http://dictybase.org";
// type HeaderProps = {
//   /** Link for the download page */
//   downloads: string,
//   /** Link for the information page */
//   info: string,
//   /** Link for the citation page */
//   cite: string,
//   /** Link for the login page */
//   login: string,
//   /** Link for the logo, that goes to the home page */
//   home?: string,
// }

var headerItems = function headerItems(items) {
  return items.map(function (link, i) {
    return React.createElement(
      Link,
      { key: i, href: link.url },
      React.createElement(FontAwesome, { name: link.icon }),
      " ",
      link.text
    );
  });
};

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
var Header = function Header(_ref) {
  var items = _ref.items,
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
        headerItems(items)
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