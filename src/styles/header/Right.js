import React from "react"
import styled from "styled-components"

const RightStyle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`

const Right = ({ children, ...props }) => (
  <RightStyle {...props}>{children}</RightStyle>
)

export default Right
