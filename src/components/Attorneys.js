import React from "react"

import dan from "../images/attorneys/dan.jpg"
import sarah from "../images/attorneys/sarah.jpg"

const Attorneys = () => (
  <article className="post-content page-template no-image">
    <div className="post-content-body">
      <h1 id="this-is-a-section">-- Our Attorneys--</h1>
      <h3 id="definition">
        <strong>Sarah Smith - Of Counsel</strong>
      </h3>
      <div className="row">
        <div className="col-3">
          <div
            style={{
              padding: "1rem 0",
              textAlign: "center",
              background: "#1d1d1f",
            }}
          >
            <img src={sarah} />

            <dl>
              <dt>Education</dt>
              <dd>
                <p>B.S. Texas A&amp;M</p>
              </dd>
              <dd>
                <p>J.D. New York Law School</p>
              </dd>
              <dt>Admissions</dt>
              <dd>
                <p>New York</p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="col-9">
          <div
            style={{
              padding: "1rem 1rem",
              textAlign: "left",
              background: "#1d1d1f",
            }}
          >
            <p>
              Like our Founding Partner, Sarah Smith has a passion and a knack
              for getting creative endeavors off the ground, building legal
              strategies that revolve around the unique creative abilities of
              our diverse group of clients. She decided to become an attorney
              after copyrighting her own music and witnessing first-hand the
              power a zealous and forward-thinking advocate can have on an
              artist's long-term success. After serving in an in-house capacity
              at Louis Vuitton and it’s parent, LVMH, where she primarily
              focused on intellectual property enforcement, Sarah went on to
              work in judgement enforcement and commercial litigation. Her
              current practice for start-up and entrepreneurial clients focuses
              on entity formation, equity agreements, real property
              acquisition/usage, and employment law
            </p>
          </div>
        </div>
      </div>
      <h3 id="definition">
        <strong>Daniel Marcus - Founding Partner</strong>
      </h3>
      <div className="row">
        <div className="col-3">
          <div
            style={{
              padding: "1rem 0",
              textAlign: "center",
              background: "#1d1d1f",
            }}
          >
            <img src={dan} />

            <dl>
              <dt>Education</dt>
              <dd>
                <p>B.S. New York University</p>
              </dd>
              <dd>
                <p>J.D. New York Law School</p>
              </dd>
              <dt>Admissions</dt>
              <dd>
                <p>New York</p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="col-9">
          <div
            style={{
              padding: "1rem 1rem",
              textAlign: "left",
              background: "#1d1d1f",
            }}
          >
            <p>
              Dan began his career in sports media, covering his beloved New
              York Jets and Yankees for SNY's digital network - and in the
              process became the youngest credentialed member of the Jets beat,
              while also simultaneously having his work featured in Newsday and
              being named a finalist for CBS New York's Most Valuable Blogger of
              2011. From there, he went on to start his first company, SeatSwap,
              a platform that allows fans to trade or barter event tickets with
              one another, from his college dorm room. After managing to
              convince two software engineers to build out his MVP for a nominal
              amount of sweat equity, Dan did what most logical Founders do and
              accepted a full scholarship to law school as he could not resist
              the prospect of the "Debt-Free JD".{" "}
            </p>
            <p>
              As such, he bootstrapped SeatSwap while pursuing said Debt-Free JD
              as a full-time law student and managed to build some pretty robust
              infrastructure in that span including a first of its' kind 1.0
              product, an elite talent pipeline that maintained working
              relationships with schools such as Princeton, Columbia, and NYU,
              developed a branded media property that went viral several times
              over, sold out New York's Irving Plaza for three consecutive
              years, and was featured in every media outlet from Rolling Stone
              to a recent ESPN "30 for 30", and attracted pilot interest from
              the likes of Carnegie Hall and Brooklyn Bowl. As he was studying
              for the New York Bar Exam, Dan's first venture began to pick up a
              considerable amount of traction as he was flown out to Berlin by
              the Adidas family to participate in the final round of an
              accelerator they started. He made a compelling enough case to
              position SeatSwap in the Top-20, just good enough to be on the
              outside looking in on the Top-15 that made it into the program.
              Around that same time, he was approached by the CEO of one of the
              biggest ticketing companies in the states who wanted to take his
              temperature on a potential acquisition. After spearheading
              negotiations with their C-Suite, that ultimately fizzled out for
              reasons he would later discover were that the potential acquirer
              simply ran out of cash, Dan took his law degree and began to
              branch out into other sports-related entrepreneurial pursuits
              including the creation of Hustle Law.
            </p>
            <p>
              In addition to practicing law in the State of New York and
              representing all manners of clients across the tech, sports,
              media, business, and non-profit realms, Dan also develops and
              produces media properties around some of the biggest names in
              sports including Pete Rose, Spice Adams, and Ozzie Guillen. Dan is
              an adjunct professor at his alma mater NYU and has lectured at
              several universities at home and across the globe including
              Princeton, St. John's, and the University of Limerick in Limerick,
              Ireland. After many years spent trying to break up the monopoly in
              the ticketing space, Dan is an industry thought leader whose work
              has been featured in publications such as Yahoo Finance and
              SportTechie.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
)

export default Attorneys
