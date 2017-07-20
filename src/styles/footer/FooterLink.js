import React from "react"
import styled from "styled-components"
import { space, fontSize, color } from "styled-system"

const FooterLinkStyle = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${space};
  ${fontSize};
  ${color};
`

const FooterLink = ({ children, ...props }) =>
  <FooterLinkStyle {...props}>
    {children}
  </FooterLinkStyle>

export default FooterLink
