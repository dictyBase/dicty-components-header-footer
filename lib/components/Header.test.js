import React from "react"
import Header from "./Header"
import renderer from "react-test-renderer"

test("matching a snapshot of Header", () => {
  const component = renderer.create(
    <Header downloads="/downloads" info="/information" cite="/citation" />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
