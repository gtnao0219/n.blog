import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

type IProps = {}

const Layout: React.SFC<IProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Contents>{children}</Contents>
      <Footer author={data.site.siteMetadata.author} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Contents = styled.main`
  box-sizing: border-box;
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
  padding: 24px 0;
  flex: 1;
`

export default Layout
