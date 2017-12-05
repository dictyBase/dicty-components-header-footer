import React from "react"
import styled from "styled-components"

const LogoStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  height: 100px;
  align-items: flex-end;
  flex-basis: calc(33.33333333333333% - 8px);
`
const Logo = ({ children, ...props }) => (
  <LogoStyle {...props}>{children}</LogoStyle>
)

export default Logo
