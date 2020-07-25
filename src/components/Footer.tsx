import React from "react"
import styled from "styled-components"
import { PALETTES } from "../utils/colorMap"

type IProps = {
  author: string
}

const Footer: React.SFC<IProps> = ({ author }) => {
  return (
    <_Footer>
      <Copyright>
        Copyright © {new Date().getFullYear()} {author} All Rights Reserved.
      </Copyright>
    </_Footer>
  )
}

const _Footer = styled.footer`
  box-sizing: border-box;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${PALETTES.gray.dark};
  color: ${PALETTES.white.base};
`

const Copyright = styled.div`
  box-sizing: border-box;
  font-size: 12px;
`

export default Footer
