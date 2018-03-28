import React from "react"
import styled from "styled-components"

const SearchContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;

  @media only screen and (max-width: 1024px) {
    width: 75%;
  }
`

const SearchContainer = ({ children, ...props }) => (
  <SearchContainerStyle {...props}>{children}</SearchContainerStyle>
)

export default SearchContainer
