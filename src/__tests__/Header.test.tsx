import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import { HeaderItem } from "../types"

const headerLinks = [
  {
    url: "/cite",
    icon: <AddIcon fontSize="large" />,
    text: "Cite Us",
  },
  {
    url: "/downloads",
    icon: <FileDownloadIcon fontSize="large" />,
    text: "Downloads",
  },
  {
    url: "/info",
    icon: <InfoIcon fontSize="large" />,
    text: "About dictyBase",
  },
]

describe("Header", () => {
  const MockComponent = () => {
    return (
      <Header items={headerLinks}>
        {(items: HeaderItem[]) =>
          items.map((link: HeaderItem, i: number) => (
            <a key={i} href={link.url}>
              {link.text}
            </a>
          ))
        }
      </Header>
    )
  }

  it("should render four links", () => {
    render(<MockComponent />)
    const links = screen.getAllByRole("link")
    // three passed links + logo link
    expect(links).toHaveLength(4)
    // verify all three passed text links appear
    headerLinks.forEach((link) => {
      expect(screen.getByText(link.text)).toBeInTheDocument()
    })
  })

  it("should render one searchbox", () => {
    render(<MockComponent />)
    expect(screen.getByRole("textbox", { name: "search" })).toBeInTheDocument()
  })

  it("should render one image", () => {
    render(<MockComponent />)
    expect(
      screen.getByRole("img", { name: "dictyBase logo" }),
    ).toBeInTheDocument()
  })

  it("should expand search box on click", () => {
    render(<MockComponent />)
    const searchbox = screen.getByLabelText("search")
    expect(searchbox).toBeInTheDocument()
    userEvent.click(searchbox)
    expect(screen.getByLabelText("expanded search")).toBeInTheDocument()
  })
})
