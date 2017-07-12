// @flow
import React from "react"
import logo from "../images/logo.png"
import {
  Img,
  Link,
  LinksContainer,
  Logo,
  Magnifier,
  Right,
  SearchBar,
  SearchContainer,
  Container,
} from "../styles/header"

type headerProps = {
  downloads: string,
  info: string,
  cite: string,
}

let Header = ({ downloads, info, cite }: headerProps) => {
  return (
    <Container>
      <Logo>
        <Img src={logo} />
      </Logo>
      <Right>
        <LinksContainer>
          <Link href={cite}>
            <i className="fa fa-plus" aria-hidden="true" /> Cite Us
          </Link>
          <Link href={downloads}>
            <i className="fa fa-download" aria-hidden="true" /> Downloads
          </Link>
          <Link href={info}>
            <i className="fa fa-info-circle" aria-hidden="true" /> Info
          </Link>
        </LinksContainer>
        <SearchContainer>
          <SearchBar placeholder="Guided Search (coming soon)" disabled />
          <Magnifier>
            <i className="fa fa-search" aria-hidden="true" />
          </Magnifier>
        </SearchContainer>
      </Right>
    </Container>
  )
}

export default Header
