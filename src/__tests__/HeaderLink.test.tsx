import React from "react"
import { render, screen } from "@testing-library/react"
import HeaderLink from "../components/HeaderLink"

describe("HeaderLink", () => {
  it("should render one link", () => {
    render(<HeaderLink href="/test">test link</HeaderLink>)
    expect(screen.getAllByRole("link")).toHaveLength(1)
    expect(screen.getByRole("link")).toHaveTextContent(/test link/)
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test")
  })
})
