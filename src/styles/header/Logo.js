import React from "react"
import styled from "styled-components"

const LogoStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  height: 100px;
  padding: 20px;
  align-items: flex-end;
`
const Logo = ({ children, ...props }) =>
  <LogoStyle {...props}>
    {children}
  </LogoStyle>

export default Logo
