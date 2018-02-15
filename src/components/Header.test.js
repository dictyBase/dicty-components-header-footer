import React from "react"
import Header from "./Header"
import renderer from "react-test-renderer"
import items from "../data/header"
import { Link } from "../styles/header"
import "jest-styled-components"
// $FlowFixMe
import "font-awesome/css/font-awesome.min.css"
import FontAwesome from "react-fontawesome"

const generateLinks = (link, i) => {
  return (
    <Link key={i} href={link.url}>
      <FontAwesome name={link.icon} />
      {link.text}
    </Link>
  )
}

test("matching a snapshot of Header", () => {
  const component = renderer.create(
    <Header items={items}>{items => items.map(generateLinks)}</Header>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
