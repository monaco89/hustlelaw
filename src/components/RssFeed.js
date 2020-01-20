import React from "react"
let Parser = require("rss-parser")
let parser = new Parser()

class RssFeed extends React.Component {
  constructor() {
    super()
    this.state = {
      recentBlogPost: {
        name: "",
        url: "",
      },
    }
  }

  async FetchDataFromRssFeed() {
    const feed = await parser.parseURL(
      "https://www.forbes.com/sites/danielmarcus/feed/"
    )
    feed.items.forEach(item => {
      this.setState({
        recentBlogPost: {
          name: item.title,
          url: item.link,
        },
      })
    })
  }

  render() {
    return (
      <div>
        Check out our blog:{" "}
        <a target="_blank" href={this.state.recentBlogPost.url}>
          {this.state.recentBlogPost.name}
        </a>
      </div>
    )
  }
}

export default RssFeed
