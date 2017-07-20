import React from "react"
import { render } from "react-dom"
import { Flex, Box, Divider } from "rebass"

import { Header, Footer } from "../../src"

const items = [
  [
    {
      header: { link: "http://yahoo.com", description: "Yahoo" },
      items: [
        { link: "http://cnn.com", description: "CNN" },
        { link: "http://nytimes.com", description: "Nytimes" },
      ],
    },
  ],
  [
    {
      header: { description: "Tools", link: "http://dictybase.org/tools" },
      items: [
        { link: "http://dictybase.org/tools", description: "Tools home" },
        { link: "http://dictybase.org/tools", description: "Genome browser" },
      ],
    },
  ],
  [
    {
      header: { description: "Please Cite", link: "http://dictybase.org/cite" },
      items: [
        { description: "dictyBase", link: "http://dictybase.org" },
        {
          description: "Dicty stock center",
          link: "http://dictybase.org/stock",
        },
      ],
    },
    {
      header: {
        description: "Supported By",
        link: "http://dictybase.org/support",
      },
      items: [
        { description: "NIH", link: "http://dictybase.org/nih" },
        { description: "GMOD", link: "http://dictybase.org/nih" },
        { description: "Gene ontology", link: "http://dictybase.org/nih" },
      ],
    },
  ],
]

const Demo = () =>
  <Flex column>
    <Box>
      <Header downloads="/downloads" info="/info" cite="/citation" />
    </Box>
    <Box w={1}>
      <Divider w={1} color="green" />
    </Box>
    <Box>
      <Footer items={items} />
    </Box>
  </Flex>

render(<Demo />, document.querySelector("#demo"))
