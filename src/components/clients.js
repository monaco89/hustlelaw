import React from "react"

import client1 from "../images/clients/brashful.png"
import client2 from "../images/clients/lacallefb.png"
import client3 from "../images/clients/megafanslogo.jpg"
import client4 from "../images/clients/shv.jpg"

const Clients = () => (
  <article>
    <div className="row">
      <div className="col-4">
        <div
          style={{
            padding: "1rem 0",
            textAlign: "center",
          }}
        >
          <img src={client1} alt="client1" style={{ height: "280px" }} />
        </div>
      </div>
      <div className="col-4">
        <div
          style={{
            padding: "1rem 0",
            textAlign: "center",
          }}
        >
          <img src={client2} alt="client2" style={{ height: "280px" }} />
        </div>
      </div>
      <div className="col-4">
        <div
          style={{
            padding: "1rem 0",
            textAlign: "center",
          }}
        >
          <img src={client3} alt="client3" style={{ height: "280px" }} />
        </div>
      </div>
      <div className="col-4">
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
)

export default Clients
