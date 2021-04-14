import React from "react"
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

const condensedFooterLinks = [
  {
    url: "/techniques",
    description: "Techniques",
  },
  {
    url: "/teaching-protocols",
    description: "Teaching Protocols",
  },
  {
    url: "/stockcenter",
    description: "Dicty Stock Center",
  },
  {
    url: "/gene",
    description: "Genome Browser",
  },
  {
    url: "/dictyaccess",
    description: "dictyAccess",
  },
  {
    url: "/conferences",
    description: "Conference",
  },
  {
    url: "/labs",
    description: "Labs",
  },
  {
    url: "/about",
    description: "About",
  },
  {
    url: "/contact",
    description: "Contact",
  },
]

const theme = {
  primary: "#004080",
  secondary: "#ebe07a",
  text: "#d8d8d8",
}

describe("Footer", () => {
  it("should render all links", () => {
    render(<Footer links={condensedFooterLinks} theme={theme} />)
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(condensedFooterLinks.length)
    // verify all links have expected text and hrefs
    condensedFooterLinks.forEach((link) => {
      expect(screen.getByText(link.description)).toBeInTheDocument()
      expect(
        screen.getByRole("link", { name: link.description }),
      ).toHaveAttribute("href", link.url)
    })
  })
})
