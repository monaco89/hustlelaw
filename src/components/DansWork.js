import React from "react"

import Forbes from "../images/forbes.png"

const DansWork = () => (
  <article className="post-content page-template">
    <div className="post-content-body">
      <h1 id="our-story">&mdash; Check Out Daniel's Work &mdash;</h1>
      <div className="row">
        <div className="col">
          <div
            style={{
              padding: "1rem 0",
              textAlign: "center",
            }}
          >
            <a href="https://www.forbes.com/sites/danielmarcus">
              <img src={Forbes} alt="forbes" style={{ height: "90px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
)

export default DansWork
