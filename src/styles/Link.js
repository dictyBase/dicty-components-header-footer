import React from "react"
import styled from "styled-components"

const LinkStyle = styled.a`
  color: #004080;
  padding: 15px;
  text-decoration: none;
`
const Link = ({ children, ...props }) => (
  <LinkStyle {...props}>{children}</LinkStyle>
)

export default Link
