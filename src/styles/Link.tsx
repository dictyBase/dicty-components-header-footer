import React from "react"
import { styled } from "@material-ui/core/styles"

const LinkStyle = styled("a")({
  color: "#004080",
  padding: "15px",
  textDecoration: "none",
})

const Link = ({ children, ...props }: any) => (
  <LinkStyle {...props}>{children}</LinkStyle>
)

export default Link
