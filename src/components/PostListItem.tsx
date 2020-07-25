import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaCalendarAlt, FaTags } from "react-icons/fa"
import Tag from "./Tag"
import { PALETTES } from "../utils/colorMap"

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
    <_Link to={`${slug}/`}>
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
  margin: 0;
  font-size: 20px;
  line-height: 1.4;
`

const _Link = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;
  padding-bottom: 8px;
  &:link {
    text-decoration: none;
    color: inherit;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:active {
    text-decoration: none;
    color: inherit;
  }
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  color: ${PALETTES.gray.base};
  &:hover {
    border-bottom: 2px solid ${PALETTES.main.base};
  }
  &:hover ${_H2} {
    color: ${PALETTES.main.base};
  }
`

const Description = styled.div`
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1.8;
  color: ${PALETTES.gray.dull};
  opacity: 0.88;
  margin-bottom: 4px;
`

const Bottom = styled.div`
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

export default PostListItem
