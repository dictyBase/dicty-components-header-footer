import React from "react"
import Footer from "./Footer"
import renderer from "react-test-renderer"
import items from "../data/footer"
import "jest-styled-components"

test("matching a snapshot of Footer", () => {
  const component = renderer.create(<Footer items={items} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
