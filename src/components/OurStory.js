import React from "react"
import Img from "gatsby-image"

import danWithSign from "../images/dan_with_sign.jpg"

const OurStory = () => (
  <article className="post-content page-template">
    <div className="post-content-body">
      <h1 id="our-story">&mdash; Our Story &mdash;</h1>
      <div className="row">
        <div className="col-6">
          <div className="post-content-image">
            <img className="kg-image" src={danWithSign} alt="our story" />
          </div>
        </div>
        <div className="col-6">
          <div className="post-content-body">
            As someone who considers himself a scrappy entrepreneur at heart and
            in practice, Hustle’s Founding Partner, Daniel Marcus bootstrapped
            his first company while pursuing his JD as a full-time law student,
            leading a double life, learning about the nuances of Antitrust and
            Intellectual Property by day and building a first of its kind tech
            platform (and subsequently pounding the pavement to make people
            aware of said tech platform - see photographic evidence to the left)
            by night. As such, he knows what it means to hustle. Though he went
            to law school to become a more versatile and “dangerous”
            entrepreneur, he realized that his experience on both sides of the
            table could make him a valuable asset/advocate for similarly minded
            folks - and thus Hustle Law was born.
          </div>
        </div>
      </div>
    </div>
  </article>
)

export default OurStory
