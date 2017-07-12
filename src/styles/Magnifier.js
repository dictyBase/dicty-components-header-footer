import React from "react"
import styled from "styled-components"

const MagnifierStyle = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 7px;
  cursor: not-allowed;
  border: 1px solid rgb(204, 204, 204);
  border-width: 1px 1px 1px 0px;
  border-color: rgb(204, 204, 204);
  border-style: solid;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`

const Magnifier = ({ children, ...props }) =>
  <MagnifierStyle {...props}>
    {children}
  </MagnifierStyle>

export default Magnifier
