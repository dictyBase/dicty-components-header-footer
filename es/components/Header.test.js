import React from "react"
import Header from "./Header"
import renderer from "react-test-renderer"
import items from "../data/header"
import "jest-styled-components"

test("matching a snapshot of Header", () => {
  const component = renderer.create(<Header items={items} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
