import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostListItem from "../components/PostListItem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allPost {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 500)
            frontmatter {
              title
              slug
              date
              tags
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        {data.allMarkdownRemark.edges.map(
          (edge: {
            node: {
              excerpt: string
              frontmatter: {
                slug: string
                title: string
                date: string
                tags: string[]
              }
            }
          }) => (
            <div
              style={{ marginBottom: "28px" }}
              key={edge.node.frontmatter.slug}
            >
              <PostListItem
                title={edge.node.frontmatter.title}
                description={edge.node.excerpt}
                slug={edge.node.frontmatter.slug}
                date={edge.node.frontmatter.date}
                tags={edge.node.frontmatter.tags}
              />
            </div>
          )
        )}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

export default IndexPage
