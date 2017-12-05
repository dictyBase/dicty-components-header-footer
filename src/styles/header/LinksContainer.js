import React from "react"
import styled from "styled-components"

const LinksContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 5px;
  flex-basis: 100%;
  font-size: 14px;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-basis: 100%;
    align-items: flex-end;
    justify-content: center;
    order: initial;
  }
`

const LinksContainer = ({ children, ...props }) => (
  <LinksContainerStyle {...props}>{children}</LinksContainerStyle>
)

export default LinksContainer
