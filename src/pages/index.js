import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import WhoWeAre from "../components/WhoWeAre"
import OurStory from "../components/OurStory"
import WhatWeDo from "../components/WhatWeDo"
import Attorneys from "../components/Attorneys"
// TODO Make Clients component work on yarn build
// import Clients from "../components/Clients"
import HLLogo from "../images/HL_no_background_white.png"
import client1 from "../images/clients/brashful.png"
import client2 from "../images/clients/lacallefb.png"
import client3 from "../images/clients/megafanslogo.jpg"
import client4 from "../images/clients/shv.jpg"

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
        title="Hustle Law"
        keywords={[`hustle`, `law`, `attorney`, `Daniel`, `Marcus`]}
      />
      {data.site.siteMetadata.description && (
        <div className="header-background">
          <header className="page-head">
            <h1 className="page-head-title">RE &#183; LENT &#183; LESS</h1>
            <p>/rə&apos;len(t)ləs/</p>
            <h4 id="heading-level-4">NOUN, VERB, WAY OF LIFE</h4>
            <h6 id="heading-level-6">
              <ol>
                <li>The indomitable spirit of those who dream.</li>
                <li>The relentless pursuit of something important.</li>
                <li>Doing whatever it takes.</li>
                <li>Not taking "no" for an answer.</li>
              </ol>
            </h6>
            <ul className="actions fit">
              <li>
                <a
                  href="#"
                  className="button primary fit large"
                  style={{ marginTop: "50px" }}
                >
                  Schedule Your Free Consultation
                </a>
              </li>
              <li>
                <a
                  href="#who-we-are"
                  className="button primary fit large"
                  style={{ marginTop: "50px" }}
                >
                  What Makes Us Different
                </a>
              </li>
            </ul>
          </header>
        </div>
      )}
      <WhoWeAre />
      <OurStory />
      <WhatWeDo />
      {/* // TODO Don't do this..., make a header */}
      <article className="post-content page-template no-image">
        <div id="services" className="post-content-body">
          <h1 id="this-is-a-section">&mdash; Services &mdash;</h1>
        </div>
      </article>
      <div className="post-feed">
        {posts.map(({ node }) => {
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
          <h1 id="this-is-a-section">&mdash; Featured Clients &mdash;</h1>
        </div>
      </article>
      <article>
        <div className="row">
          <div className="col">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client1} style={{ height: "280px" }} />
            </div>
          </div>
          <div className="col">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client2} style={{ height: "280px" }} />
            </div>
          </div>
          <div className="col">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client3} style={{ height: "280px" }} />
            </div>
          </div>
          <div className="col">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client4} style={{ height: "280px" }} />
            </div>
          </div>
        </div>
      </article>
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
