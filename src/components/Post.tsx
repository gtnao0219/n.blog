import React from "react"
import styled from "styled-components"
import { FaCalendarAlt, FaTags } from "react-icons/fa"
import Tag from "./Tag"
import { PALETTES } from "../utils/colorMap"

type IProps = {
  html: string
  title: string
  date: string
  tags: string[]
}

const Post: React.SFC<IProps> = ({ html, title, date, tags }) => (
  <div>
    <_H1>{title}</_H1>
    <HeaderBottom>
      <Date>
        <FaCalendarAlt /> <div style={{ marginLeft: "4px" }}>{date}</div>
      </Date>
      <Tags>
        <FaTags />
        {tags.map(tag => (
          <div style={{ marginLeft: "4px" }}>
            <Tag key={tag}>{tag}</Tag>
          </div>
        ))}
      </Tags>
    </HeaderBottom>
    <_HR />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

const _H1 = styled.h1`
  box-sizing: border-box;
  margin: 0;
  font-size: 32px;
  line-height: 1.4;
  margin-bottom: 4px;
`

const HeaderBottom = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 12px;
  line-height: 1.4;
  color: ${PALETTES.gray.dull};
`

const Date = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  margin-right: 16px;
  flex-grow: 0;
  flex-shrink: 0;
`

const Tags = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const _HR = styled.hr`
  box-sizing: border-box;
  margin: 8px 0 24px;
`

export default Post
