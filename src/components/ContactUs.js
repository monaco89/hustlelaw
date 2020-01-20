import React from "react"
import * as typeformEmbed from "@typeform/embed"

class ContactUs extends React.Component {
  componentDidMount() {
    const popup = typeformEmbed.makePopup(
      "https://danielmarcus201181.typeform.com/to/hWDTQA",
      {
        mode: "popup",
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function() {
          console.log("successfully submitted")
        },
      }
    )
    document.getElementById("bt-popup").addEventListener("click", function() {
      popup.open()
    })
  }

  render() {
    return (
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 id="contact-us">&mdash; Contact Us &mdash;</h1>
          <button className="button primary fit large" id="bt-popup">
            Schedule A Consultation Here
          </button>
        </div>
      </article>
    )
  }
}

export default ContactUs
