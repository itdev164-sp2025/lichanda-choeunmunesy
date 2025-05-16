import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./Header"
import "./layout.css"
import { Main } from './Main'
import { Footer } from './Footer'
import { ThemeProvider } from "styled-components"
import { Gray } from './themes/Gray'
import { Content } from './Content'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Gray}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <Main m={20}>{children}</Main>
          <Footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
            }}
          >
            © {new Date().getFullYear()} &middot; Built with{' '}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </Footer>
        </div>
      </Content>
    </ThemeProvider>
  )
}
export default Layout
