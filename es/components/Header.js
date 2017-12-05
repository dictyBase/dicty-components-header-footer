import React from "react";
import logo from "../images/logo.png";
import { Container, Img, Link, LinksContainer, Logo, Magnifier, Right, SearchBar, SearchContainer } from "../styles/header";

// $FlowFixMe
import "font-awesome/css/font-awesome.min.css";

import FontAwesome from "react-fontawesome";

var Home = "http://dictybase.org";


/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
var Header = function Header(_ref) {
  var downloads = _ref.downloads,
      info = _ref.info,
      cite = _ref.cite,
      login = _ref.login,
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
        React.createElement(
          Link,
          { href: login },
          React.createElement(FontAwesome, { name: "sign-in" }),
          " Login"
        ),
        React.createElement(
          Link,
          { href: cite },
          React.createElement(FontAwesome, { name: "plus" }),
          " Cite Us"
        ),
        React.createElement(
          Link,
          { href: downloads },
          React.createElement(FontAwesome, { name: "download" }),
          " Downloads"
        ),
        React.createElement(
          Link,
          { href: info },
          React.createElement(FontAwesome, { name: "info-circle" }),
          " About dictyBase"
        )
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