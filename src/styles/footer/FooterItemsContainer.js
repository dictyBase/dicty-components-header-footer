import React from "react"
import styled from "styled-components"
import { space } from "styled-system"

const ContainerStyle = styled.ul`
  list-style: none;
  @media (max-width: 40em) : {
    textAlign: center;
  }
  ${space};
`

const FooterItemsContainer = ({ children, ...props }) =>
  <ContainerStyle {...props}>
    {children}
  </ContainerStyle>

export default FooterItemsContainer
