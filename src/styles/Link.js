import React from "react"
import styled from "styled-components"

const Link = styled.a`
  color: #15317e;
  margin-right: 8px;
  text-decoration: none;
`
const Link = ({ children, ...props }) =>
  <Link {...props}>
    {children}
  </Link>

export default Link
