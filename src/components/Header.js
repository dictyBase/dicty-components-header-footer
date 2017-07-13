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

let Header = ({
  downloads,
  info,
  cite,
  home = Home,
}: {
  downloads: string,
  info: string,
  cite: string,
  home?: string,
}) => {
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
            <FontAwesome name="info-circle" /> Info
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
