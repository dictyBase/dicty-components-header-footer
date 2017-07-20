import React from "react"
import styled from "styled-components"

const ContainerStyle = styled.div`
  @media (max-width: 40em) : {
    textAlign: center;
  }
`

const FooterItemsHeader = ({ children, ...props }) =>
  <ContainerStyle {...props}>
    {children}
  </ContainerStyle>

export default FooterItemsHeader
