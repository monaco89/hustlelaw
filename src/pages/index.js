import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import WhoWeAre from "../components/WhoWeAre"
import OurStory from "../components/OurStory"
import WhatWeDo from "../components/WhatWeDo"
import Attorneys from "../components/Attorneys"
import ContactUs from "../components/ContactUs"
import Subscribe from "../components/Subscribe"
import DansWork from "../components/DansWork"
// TODO Make Clients component work on yarn build
// import Clients from "../components/Clients"
import client1 from "../images/clients/brashful.png"
import client2 from "../images/clients/lacallefb.png"
import client3 from "../images/clients/megafanslogo.jpg"
import client4 from "../images/clients/shv.jpg"
import arrow from "../images/arrow.png"

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
            <h1 className="page-head-title">HUS &#183; TLE</h1>
            <p>/&apos;həsəl/</p>
            <h4 id="heading-level-4">NOUN, VERB, WAY OF LIFE</h4>
            <h6 id="heading-level-6">
              <ol>
                <li>The indomitable spirit of those who dream.</li>
                <li>The relentless pursuit of something important.</li>
                <li>Doing whatever it takes.</li>
                <li>Not taking "no" for an answer.</li>
              </ol>
            </h6>
            <a
              href="#contact-us"
              className="button primary fit large"
              style={{
                marginTop: "50px",
                color: "#2997ff",
                // boxShadow: "inset 0 0 0 2px white",
                backgroundColor: "white",
              }}
            >
              Schedule Your Free Consultation
            </a>
            <img
              style={{
                marginTop: "50px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={arrow}
              height="100"
              width="200"
              alt="arrow"
            />
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
          <div className="col-3">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client1} alt="client1" style={{ height: "280px" }} />
            </div>
          </div>
          <div className="col-3">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client2} alt="client2" style={{ height: "280px" }} />
            </div>
          </div>
          <div className="col-3">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client3} alt="client3" style={{ height: "280px" }} />
            </div>
          </div>
          <div className="col-3">
            <div
              style={{
                padding: "1rem 0",
                textAlign: "center",
              }}
            >
              <img src={client4} alt="client4" style={{ height: "280px" }} />
            </div>
          </div>
        </div>
      </article>
      <Attorneys />
      <DansWork />
      <Subscribe />
      <ContactUs />
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
