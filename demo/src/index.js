import React from "react"
import { render } from "react-dom"
import { Header, Footer } from "../../src"
import links from "../../src/data/header"
import items from "../../src/data/footer"
import Link from "../../src/styles/Link"
import "font-awesome/css/font-awesome.min.css"
import FontAwesome from "react-fontawesome"
import { styled } from "@material-ui/styles"

const RouterLink = styled(Link)({
  color: "#004080",
})

const generateLinks = (link, i) =>
  link.isRouter ? (
    <RouterLink key={i} href={link.url}>
      <center>
        <FontAwesome name={link.icon} size="lg" />
        &nbsp;
        {link.text}
      </center>
    </RouterLink>
  ) : (
    <Link key={i} href={link.url}>
      <center>
        <FontAwesome name={link.icon} size="lg" />
        &nbsp;
        {link.text}
      </center>
    </Link>
  )

const Demo = () => (
  <React.Fragment>
    <Header items={links}>{items => items.map(generateLinks)}</Header>
    <br />
    <br />
    <br />
    <br />
    <Footer items={items} />
  </React.Fragment>
)

render(<Demo />, document.querySelector("#demo"))
