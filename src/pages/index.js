import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import Clients from "../components/Clients"
import WhoWeAre from "../components/WhoWeAre"
import Attorneys from "../components/Attorneys"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const Home = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Hustle Law Group"
        keywords={[`hustle`, `law`, `attorney`, `Daniel`, `Marcus`]}
      />
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <a
            href="#"
            className="button primary large"
            style={{ marginTop: "50px" }}
          >
            Schedule Your Free Consultation
          </a>
        </header>
      )}
      <WhoWeAre />
      <div className="post-feed">
        {posts.slice(0, 2).map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
      {/* // TODO Don't do this... */}
      <article className="post-content page-template no-image">
        <div id="services" className="post-content-body">
          <h1 id="this-is-a-section">-- Services --</h1>
        </div>
      </article>
      <div className="post-feed">
        {posts.slice(3, 9).map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 id="this-is-a-section">-- Featured Clients --</h1>
        </div>
      </article>
      <Clients />
      <Attorneys />
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Home location={props.location} props data={data} {...props} />
    )}
  />
)
