import React from "react"
import styled from "styled-components"

const SearchBarStyle = styled.input`
  cursor: not-allowed;
  border: 1px solid rgb(204, 204, 204);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  width: 50%;
  height: 30px;
  color: #555;
  padding: 0px 0px 0px 5px;
`

const SearchBar = ({ children, ...props }) =>
  <SearchBarStyle {...props}>
    {children}
  </SearchBarStyle>

export default SearchBar
