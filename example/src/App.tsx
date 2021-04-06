import React from "react"
import { Header, Footer } from "dicty-components-header-footer"
import headerLinks from "./data/header"
import footerLinks from "./data/footer"

type Link = {
  url: string
  text: string
  icon: string
  isRouter: boolean
}

const generateLinks = (link: Link, i: number) =>
  link.isRouter ? (
    <a key={i} href={link.url}>
      {link.text}
    </a>
  ) : (
    <a key={i} href={link.url}>
      {link.text}
    </a>
  )

const App = () => {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <Header items={headerLinks}>
        {(items: Link[]) => items.map(generateLinks)}
      </Header>
      <br />
      <br />
      <br />
      <br />
      <Footer items={footerLinks} />
    </div>
  )
}

export default App
