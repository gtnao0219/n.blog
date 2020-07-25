import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"
import SEO from "../components/SEO"

const PostTemplate = (props: any) => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title} />
      <Post
        html={props.data.markdownRemark.html}
        title={props.data.markdownRemark.frontmatter.title}
        date={props.data.markdownRemark.frontmatter.date}
        tags={props.data.markdownRemark.frontmatter.tags}
      />
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`
