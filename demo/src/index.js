import React, { Component } from "react"
import { render } from "react-dom"

import Header from "../../src/components/Header"

class Demo extends Component {
  render() {
    return (
      <div>
        <Header
          downloads={"www.google.com"}
          info={"www.google.com"}
          cite={"www.google.com"}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#demo"))
