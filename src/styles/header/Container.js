import React from "react"
import styled from "styled-components"

const ContainerStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`
const Container = ({ children, ...props }) => (
  <ContainerStyle {...props}>{children}</ContainerStyle>
)

export default Container
