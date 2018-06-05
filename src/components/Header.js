// @flow
import React from "react"
import type { Node } from "react"
import logo from "../images/logo.png"
import {
  Center,
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

type ItemType = {
  /** url link */
  url: string,
  /** FontAwesome icon to be displayed */
  icon: string,
  /** description of the link that will be displayed */
  text: string,
  /** whether the link will be routed using react-routers `Link` component
   * remember, the rendering will be decided by children component
   */
  isRouter?: boolean,
}

type HeaderProps = {
  /** List of header items, inside an array */
  items: Array<ItemType>,
  /** Link for the logo, that goes to the home page */
  home?: string,
  /** Children react node which renders the links in the header */
  children: Node,
}

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
let Header = ({ children, items, home = Home }: HeaderProps) => {
  return (
    <Container>
      <Logo>
        <Link href={home}>
          <Img src={logo} />
        </Link>
      </Logo>
      <Center>
        <SearchContainer>
          <SearchBar placeholder="Guided Search (coming soon)" disabled />
          <Magnifier>
            <FontAwesome name="search" />
          </Magnifier>
        </SearchContainer>
      </Center>
      <Right>
        <LinksContainer>{children(items)}</LinksContainer>
      </Right>
    </Container>
  )
}

export default Header
