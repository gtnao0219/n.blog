import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { PALETTES } from "../utils/colorMap"

type IProps = {
  siteTitle: string
}

const Header: React.SFC<IProps> = ({ siteTitle }) => (
  <_Header>
    <_H1>
      <_Link to="/">{siteTitle}</_Link>
    </_H1>
  </_Header>
)

const _Header = styled.header`
  box-sizing: border-box;
  height: 40px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: ${PALETTES.main.dark};
  color: ${PALETTES.white.base};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
`

const _Link = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  &:link {
    text-decoration: none;
    color: inherit;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    text-decoration: none;
    color: inherit;
  }
  &:active {
    text-decoration: none;
    color: inherit;
  }
`

const _H1 = styled.h1`
  box-sizing: border-box;
  font-size: 24px;
  margin: 0;
`

export default Header
