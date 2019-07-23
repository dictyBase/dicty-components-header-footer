import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ExpandedSearch from "./ExpandedSearch"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Grow from "@material-ui/core/Grow"

configure({ adapter: new Adapter() })

describe("ExpandedSearch", () => {
  const props = {
    classes: {},
  }
  const wrapper = shallow(<ExpandedSearch {...props} />).dive()

  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders initial components", () => {
      expect(wrapper.find(Grow)).toHaveLength(1)
      expect(wrapper.find(Grid)).toHaveLength(1)
      expect(wrapper.find(FormControl)).toHaveLength(1)
      expect(wrapper.find(InputLabel)).toHaveLength(1)
      expect(wrapper.find(Input)).toHaveLength(1)
    })
  })
})
