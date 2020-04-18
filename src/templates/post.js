import React from "react"
import Layout from "../components/layout"
import Tag from "../components/Tag"

const PageTemplate = props => {
  return (
    <Layout>
      <h5>{props.data.markdownRemark.frontmatter.date}</h5>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div style={{ display: "flex", marginBottom: "16px" }}>
        {props.data.markdownRemark.frontmatter.tags.map(tag => (
          <div style={{ marginRight: "8px" }}>
            <Tag key={tag}>{tag}</Tag>
          </div>
        ))}
      </div>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
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
