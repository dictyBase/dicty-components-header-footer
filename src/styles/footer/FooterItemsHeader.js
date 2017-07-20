import React from "react"
import styled from "styled-components"
import { space, fontSize, color } from "styled-system"

const ContainerStyle = styled.div`
  @media (max-width: 40em) : {
    textAlign: center;
  }
  ${space};
  ${fontSize};
  ${color};
`

const FooterItemsHeader = ({ children, ...props }) =>
  <ContainerStyle {...props}>
    {children}
  </ContainerStyle>

export default FooterItemsHeader
