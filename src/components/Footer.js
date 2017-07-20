// @flow
import React from "react"
import { Provider, Box } from "rebass"
import FooterContainer from "../styles/footer/FooterContainer"
import FooterItemsHeader from "../styles/footer/FooterItemsHeader"
import FooterLink from "../styles/footer/FooterLink"
import FooterItemsContainer from "../styles/footer/FooterItemsContainer"
import FooterItem from "../styles/footer/FooterItem"

type ItemType = {
  /** url link */
  link: string,
  /** description of the link that will be displayed */
  description: string,
}

type FooterItemType = {
  /** The header or title of every footer section */
  header: ItemType,
  /** List of entry under the header */
  items: Array<ItemType>,
}

type FooterProps = {
  /** List of footer items, inside a nested list */
  items: Array<Array<FooterItemType>>,
}

const footerItems = (items: Array<ItemType>) =>
  items.map((c, i) =>
    <FooterItem key={i} mt={0} ml={0} pl={0} pt={3}>
      <FooterLink href={c.link} color="#d8d8d8" fontSize={11}>
        {c.description}
      </FooterLink>
    </FooterItem>,
  )

const footerSubSections = (items: Array<FooterItemType>) =>
  items.map((c, i) =>
    <Box key={i} p={10}>
      <FooterItemsHeader>
        <FooterLink
          href={c.header.link}
          color="#ccffcc"
          pt={10}
          pb={6}
          fontSize={14}>
          {c.header.description}
        </FooterLink>
      </FooterItemsHeader>
      <FooterItemsContainer mt={0} ml={0} pl={0}>
        {footerItems(c.items)}
      </FooterItemsContainer>
    </Box>,
  )

const footerSections = (items: Array<Array<FooterItemType>>) => {
  const fraction = 1 / items.length
  return items.map((c, i) =>
    <Box width={fraction} key={i}>
      {footerSubSections(c)}
    </Box>,
  )
}

const theme = {
  breakpoints: [40, 52, 64],
  font: "helvetica,arial,sans-serif",
  background: "linear-gradient(#15317E, #0099FF)",
}

/**
 * The `Footer` component that will be displayed
 * at the bottom of every react web application of [dictyBase](http://dictybase.org).
 */
let Footer = ({ items }: FooterProps) =>
  <Provider theme={theme}>
    <FooterContainer
      mt={50}
      mr="auto"
      ml="auto"
      pr={15}
      pl={15}
      width={[750, 992, 1200]}>
      {footerSections(items)}
    </FooterContainer>
  </Provider>

export default Footer
