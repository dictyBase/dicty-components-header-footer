import React from "react"
import styled from "styled-components"
import { space } from "styled-system"

const ItemStyle = styled.li`
  list-style: none;
  ${space};
`

const FooterItem = ({ children, ...props }) => (
  <ItemStyle {...props}>{children}</ItemStyle>
)

export default FooterItem
