import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import sinon from "sinon"
import NormalSearch from "./NormalSearch"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"

configure({ adapter: new Adapter() })

describe("NormalSearch", () => {
  const handleClickSpy = sinon.spy()
  const props = {
    classes: {},
    handleClick: handleClickSpy,
  }
  const wrapper = shallow(<NormalSearch {...props} />).dive()

  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(1)
      expect(wrapper.find(FormControl)).toHaveLength(1)
      expect(wrapper.find(InputLabel)).toHaveLength(1)
    })
    it("calls handleClick function when input is clicked", () => {
      const input = wrapper.find(Input)
      input.simulate("click")
      expect(handleClickSpy.calledOnce).toBe(true)
    })
  })
})
