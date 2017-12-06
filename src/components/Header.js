// @flow
import React from "react"
import logo from "../images/logo.png"
import {
  Container,
  Img,
  Link,
  LinksContainer,
  Logo,
  Magnifier,
  Right,
  SearchBar,
  SearchContainer,
} from "../styles/header"

// $FlowFixMe
import "font-awesome/css/font-awesome.min.css"

import FontAwesome from "react-fontawesome"

const Home = "http://dictybase.org"
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

type ItemType = {
  /** url link */
  url: string,
  /** FontAwesome icon to be displayed */
  icon: string,
  /** description of the link that will be displayed */
  text: string,
}

type HeaderProps = {
  /** List of header items, inside an array */
  items: Array<ItemType>,
  /** Link for the logo, that goes to the home page */
  home?: string,
}

const headerItems = (items: Array<ItemType>) =>
  items.map((link, i) => (
    <Link key={i} href={link.url}>
      <FontAwesome name={link.icon} /> {link.text}
    </Link>
  ))

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
let Header = ({ items, home = Home }: HeaderProps) => {
  return (
    <Container>
      <Logo>
        <Link href={home}>
          <Img src={logo} />
        </Link>
      </Logo>
      <Right>
        <LinksContainer>{headerItems(items)}</LinksContainer>
        <SearchContainer>
          <SearchBar placeholder="Guided Search (coming soon)" disabled />
          <Magnifier>
            <FontAwesome name="search" />
          </Magnifier>
        </SearchContainer>
      </Right>
    </Container>
  )
}

export default Header
