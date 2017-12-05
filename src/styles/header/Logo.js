import React from "react"
import styled from "styled-components"

const LogoStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  height: 100px;
  align-items: flex-end;
  flex-basis: calc(33.33333333333333% - 8px);

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-basis: 100%;
    align-items: flex-end;
    justify-content: center;
    order: initial;
  }
`
const Logo = ({ children, ...props }) => (
  <LogoStyle {...props}>{children}</LogoStyle>
)

export default Logo
