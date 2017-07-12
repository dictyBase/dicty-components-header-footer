import React from "react"
import styled from "styled-components"

const ImgStyle = styled.img`${"" /* max-width: 220px; */} height: 100px;`

const Img = ({ children, ...props }) =>
  <ImgStyle {...props}>
    {children}
  </ImgStyle>

export default Img
