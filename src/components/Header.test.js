import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Header from "./Header"
import Link from "../styles/Link"
import { styled } from "@material-ui/styles"
import items from "../data/header"
import "font-awesome/css/font-awesome.min.css"
import FontAwesome from "react-fontawesome"
import Grid from "@material-ui/core/Grid"
import NormalSearch from "./NormalSearch"

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
  const wrapper = shallow(
    <Header items={items}>{items => items.map(generateLinks)}</Header>,
  ).dive()

  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })

    it("renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(NormalSearch)).toHaveLength(1)
    })
  })
})
