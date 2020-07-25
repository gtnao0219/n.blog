import React from "react"
import styled from "styled-components"
import { PALETTES } from "../utils/colorMap"

type IProps = {}

const Tag: React.SFC<IProps> = ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: 0 8px;
  background-color: ${PALETTES.main.dark};
  color: ${PALETTES.white.base};
  line-height: 1;
  font-size: 12px;
  line-height: 1.6;
  font-weight: bold;
  text-align: center;
  border-radius: 3px;
  pointer-events: none;
`

export default Tag
