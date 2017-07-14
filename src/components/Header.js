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
import "font-awesome/css/font-awesome.min.css"
import FontAwesome from "react-fontawesome"

const Home = "http://dictybase.org"
type HeaderProps = {
  /** Link for the download page */
  downloads: string,
  /** Link for the information page */
  info: string,
  /** Link for the citation page */
  cite: string,
  /** Link for the logo, that goes to the home page */
  home?: string,
}

/**
 * The `Header` component that will be displayed
 * on top of navigation bar in every react web application of [dictyBase](http://dictybase.org).
 */
let Header = ({ downloads, info, cite, home = Home }: HeaderProps) => {
  return (
    <Container>
      <Logo>
        <Link href={home}>
          <Img src={logo} />
        </Link>
      </Logo>
      <Right>
        <LinksContainer>
          <Link href={cite}>
            <FontAwesome name="plus" /> Cite Us
          </Link>
          <Link href={downloads}>
            <FontAwesome name="download" /> Downloads
          </Link>
          <Link href={info}>
            <FontAwesome name="info-circle" /> About dictyBase
          </Link>
        </LinksContainer>
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
