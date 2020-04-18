import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaCalendarAlt, FaTags } from "react-icons/fa"
import Tag from "./Tag"

type IProps = {
  title: string
  description: string
  slug: string
  date: string
  tags: string[]
}

const PostListItem: React.SFC<IProps> = ({
  title,
  description,
  slug,
  date,
  tags,
}) => (
  <_Article>
    <_Link to={slug}>
      <_H2>{title}</_H2>
      <Description>{description}</Description>
      <Bottom>
        <Date>
          <FaCalendarAlt />
          <div style={{ marginLeft: "4px" }}>{date}</div>
        </Date>
        <Tags>
          <FaTags />
          {tags.map(tag => (
            <div key={tag} style={{ marginLeft: "4px" }}>
              <Tag>{tag}</Tag>
            </div>
          ))}
        </Tags>
      </Bottom>
    </_Link>
  </_Article>
)

const _Article = styled.article`
  box-sizing: border-box;
  width: 100%;
`

const _H2 = styled.h2`
  box-sizing: border-box;
  margin-bottom: 8px;
  font-size: 24px;
`

const _Link = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  color: #383838;
  &:hover {
    border-bottom: 2px solid #1468ad;
  }
  &:hover ${_H2} {
    color: #1468ad;
  }
`

const Description = styled.div`
  box-sizing: border-box;
  margin-bottom: 8px;
  font-size: 14px;
  color: #686868;
`

const Bottom = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #686868;
`

const Date = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  margin-right: 24px;
`

const Tags = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default PostListItem
