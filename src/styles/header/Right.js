import React from "react"
import styled from "styled-components"

const RightStyle = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;

  @media only screen and (max-width: 965px) {
    display: flex;
    flex-basis: 100%;
    align-items: flex-end;
    justify-content: center;
    order: initial;
    padding: 0px 3px 3px 0px;
  }
`

const Right = ({ children, ...props }) => (
  <RightStyle {...props}>{children}</RightStyle>
)

export default Right
