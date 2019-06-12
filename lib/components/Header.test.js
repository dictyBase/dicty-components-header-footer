import React from "react"
import Header from "./Header"
import renderer from "react-test-renderer"
import items from "../data/header"
import Link from "../styles/Link"
import { styled } from "@material-ui/styles"
import "font-awesome/css/font-awesome.min.css"
import FontAwesome from "react-fontawesome"

const RouterLink = styled(Link)({
  color: "#ff6b81",
})

const generateLinks = (link, i) =>
  link.isRouter ? (
    <RouterLink key={i} href={link.url}>
      <FontAwesome name={link.icon} />
      {link.text}
    </RouterLink>
  ) : (
    <Link key={i} href={link.url}>
      <FontAwesome name={link.icon} />
      {link.text}
    </Link>
  )

test("matching a snapshot of Header", () => {
  const component = renderer.create(
    <Header items={items}>{items => items.map(generateLinks)}</Header>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
