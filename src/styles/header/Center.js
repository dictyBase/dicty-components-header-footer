import React from "react"
import styled from "styled-components"

const CenterStyle = styled.div`
  width: 28%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  @media only screen and (max-width: 965px) {
    display: flex;
    flex-basis: 100%;
    align-items: flex-end;
    justify-content: center;
    order: initial;
    padding: 0px 5px 5px 0px;
  }
`

const Center = ({ children, ...props }) => (
  <CenterStyle {...props}>{children}</CenterStyle>
)

export default Center
