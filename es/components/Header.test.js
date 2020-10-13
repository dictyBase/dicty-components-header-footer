import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Header from "./Header"
import Link from "../styles/Link"
import { styled } from "@material-ui/styles"
import items from "../data/header"
import FontAwesome from "react-fontawesome"
import NormalSearch from "./NormalSearch"
import ExpandedSearch from "./ExpandedSearch"

configure({ adapter: new Adapter() })

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

describe("Header", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("initial render", () => {
    const wrapper = shallow(
      <Header items={items}>{(items) => items.map(generateLinks)}</Header>,
    ).dive()

    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })

    it("renders normal search box", () => {
      expect(wrapper.find(NormalSearch)).toHaveLength(1)
    })
  })

  describe("expanded search box", () => {
    jest.spyOn(React, "useState").mockImplementation(() => [true, jest.fn()])
    const wrapper = shallow(
      <Header items={items}>{(items) => items.map(generateLinks)}</Header>,
    ).dive()

    it("displays ExpandedSearch when isExpanded", () => {
      expect(wrapper.find(ExpandedSearch)).toHaveLength(1)
    })
  })
})
