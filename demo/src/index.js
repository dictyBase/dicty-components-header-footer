import React from "react"
import { render } from "react-dom"
import { Flex, Box, Divider } from "rebass"

import { Header, Footer } from "../../src"
import links from "../../src/data/header"
import items from "../../src/data/footer"
import { Link } from "../../src/styles/header"
import "font-awesome/css/font-awesome.min.css"
import FontAwesome from "react-fontawesome"
import styled from "styled-components"

const RouterLink = styled(Link)`
  color: #1b9cfc;
`

const generateLinks = (link, i) => {
  return link.isRouter ? (
    <RouterLink key={i} href={link.url}>
      <FontAwesome name={link.icon} size="lg" />&nbsp;
      {link.text}
    </RouterLink>
  ) : (
    <Link key={i} href={link.url}>
      <FontAwesome name={link.icon} />&nbsp;
      {link.text}
    </Link>
  )
}

const Demo = () => (
  <Flex column>
    <Box>
      <Header items={links}>{items => items.map(generateLinks)}</Header>
    </Box>
    <Box w={1}>
      <Divider w={1} color="green" />
    </Box>
    <Box>
      <Footer items={items} />
    </Box>
  </Flex>
)

render(<Demo />, document.querySelector("#demo"))
