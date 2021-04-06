import React from "react"
import { styled } from "@material-ui/core/styles"

const LinkStyle = styled("a")({
  color: "#004080",
  padding: "15px",
  textDecoration: "none",
})

const HeaderLink = ({ children, ...props }: any) => (
  <LinkStyle {...props}>{children}</LinkStyle>
)

export default HeaderLink
