import React from "react"
import styled from "styled-components"

const SearchBarStyle = styled.input`
  border: 1px solid rgb(204, 204, 204);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  width: 75%;
  height: 30px;
  color: #555;
  padding: 0px 0px 0px 5px;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-basis: 100%;
    align-items: flex-end;
    justify-content: center;
    order: initial;
  }
`

const SearchBar = ({ children, ...props }) => (
  <SearchBarStyle {...props}>{children}</SearchBarStyle>
)

export default SearchBar
