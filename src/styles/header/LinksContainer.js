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
`

const LinksContainer = ({ children, ...props }) => (
  <LinksContainerStyle {...props}>{children}</LinksContainerStyle>
)

export default LinksContainer
