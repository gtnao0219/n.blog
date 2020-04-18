import React from "react"
import styled from "styled-components"

type IProps = {}

const Tag: React.SFC<IProps> = ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: 4px;
  background-color: #0f4c81;
  color: #ffffff;
  line-height: 1;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
`

export default Tag
