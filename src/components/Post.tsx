import React from "react"
import styled from "styled-components"
import { FaCalendarAlt, FaTags } from "react-icons/fa"
import Tag from "./Tag"

type IProps = {
  html: string
  title: string
  date: string
  tags: string[]
}

const Post: React.SFC<IProps> = ({ html, title, date, tags }) => (
  <div>
    <Date>
      <FaCalendarAlt /> <div style={{ marginLeft: "4px" }}>{date}</div>
    </Date>
    <_H1>{title}</_H1>
    <Tags>
      <FaTags />
      {tags.map(tag => (
        <div style={{ marginLeft: "4px" }}>
          <Tag key={tag}>{tag}</Tag>
        </div>
      ))}
    </Tags>
    <hr />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

const _H1 = styled.h1`
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 24px;
  font-size: 36px;
`

const Date = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: #686868;
  font-weight: bold;
  margin-bottom: 16px;
`

const Tags = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  color: #686868;
`

export default Post
