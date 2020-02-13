import React from "react"
import Mailchimp from "react-mailchimp-form"

const Subscribe = () => (
  <article className="post-content page-template no-image">
    <div className="post-content-body">
      <h1 id="subscribe">&mdash; Keep Us On Your Radar &mdash;</h1>
      <Mailchimp
        action="https://hustlelawgroup.us3.list-manage.com/subscribe/post?u=b4aea9fc27fbebfd92a3d1bba&amp;id=c73ed47614"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "First Name",
            type: "text",
            required: true,
          },
          {
            name: "LNAME",
            placeholder: "Last Name",
            type: "text",
            required: true,
          },
          //   {
          //     name: "BIRTHDAY",
          //     placeholder: "Date of Birth",
          //     type: "date",
          //     required: true,
          //   },
        ]}
        className="mailchimp"
      />
    </div>
  </article>
)

export default Subscribe
