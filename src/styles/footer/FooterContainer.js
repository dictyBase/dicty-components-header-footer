import React from "react"
import { Flex } from "rebass"
import styled from "styled-components"

const ContainerStyle = styled(Flex)`
  justify-content: center;
  background: ${props =>
    props.theme.background
      ? props.theme.background
      : "linear-gradient(#15317E, #0099FF)"};
`

const FooterContainer = ({ children, ...props }) =>
  <ContainerStyle {...props}>
    {children}
  </ContainerStyle>

export default FooterContainer
