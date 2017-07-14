import React from "react"
import { render } from "react-dom"

import Header from "../../src/components/Header"

const Demo = () =>
  <div>
    <Header
      downloads={"www.google.com"}
      info={"www.google.com"}
      cite={"www.google.com"}
    />
  </div>

render(<Demo />, document.querySelector("#demo"))
