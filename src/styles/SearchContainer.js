import React from "react"
import styled from "styled-components"

const SearchContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const SearchContainer = ({ children, ...props }) =>
  <SearchContainerStyle {...props}>
    {children}
  </SearchContainerStyle>

export default SearchContainer
