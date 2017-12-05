import React from "react"
import { render } from "react-dom"
import { Flex, Box, Divider } from "rebass"

import { Header, Footer } from "../../src"
import items from "../../src/data/footer"

const Demo = () =>
  <Flex column>
    <Box>
      <Header login="/login" downloads="/downloads" info="/info" cite="/citation" />
    </Box>
    <Box w={1}>
      <Divider w={1} color="green" />
    </Box>
    <Box>
      <Footer items={items} />
    </Box>
  </Flex>

render(<Demo />, document.querySelector("#demo"))
