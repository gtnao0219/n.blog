import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Tag from "./Tag"

type IProps = {
  postTitle: string
  link: string
  description: string
  date: string
  tags: string[]
}

const PostPreview: React.SFC<IProps> = ({
  postTitle,
  link,
  description,
  date,
  tags,
}) => (
  <_Article>
    <_Link to={link}>
      <_H2>{postTitle}</_H2>
      <Description>{description}</Description>
      <Bottom>
        <div style={{ marginRight: "16px" }}>{date}</div>
        {tags.map(tag => (
          <div key={tag} style={{ marginRight: "4px" }}>
            <Tag>{tag}</Tag>
          </div>
        ))}
      </Bottom>
    </_Link>
  </_Article>
)

const _Article = styled.article`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  color: #383838;
  &:hover {
    color: #1468ad;
    border-bottom: 1px solid #1468ad;
  }
`

const _H2 = styled.h2`
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 8px;
  font-size: 24px;
`

const Description = styled.div`
  box-sizing: border-box;
  margin-bottom: 4px;
  font-size: 14px;
  color: #686868;
`

const Bottom = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #686868;
`

export default PostPreview
