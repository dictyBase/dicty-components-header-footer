import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Footer from "./Footer"
import items from "../data/footer"
import Grid from "@material-ui/core/Grid"

configure({ adapter: new Adapter() })

describe("Footer", () => {
  const wrapper = shallow(<Footer items={items} />).dive()

  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders correct number of Grids based on items prop", () => {
      expect(wrapper.find(Grid)).toHaveLength(9)
    })
  })
})
