import React from "react"
import styled from "styled-components"

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const Container = ({ children, ...props }) =>
  <ContainerStyle {...props}>
    {children}
  </ContainerStyle>

export default Container
