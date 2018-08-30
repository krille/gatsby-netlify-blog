import React, { Component } from 'react'
import Img from 'gatsby-image'

export default class PostPage extends Component {
  render() {
	const { data } = this.props
	const { frontmatter } = data.markdownRemark

	if (!data) {
		return null
	}

	return (
	  <div>
		<img src={frontmatter.image} />
		<h1>{frontmatter.title}</h1>
		<p>{frontmatter.date}</p>
		<div dangerouslySetInnerHTML={{
			__html: data.markdownRemark.html
		}} />
	  </div>
	)
  }
}

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: {
			slug: {
				eq: $slug
			}
		}) {
			html
			frontmatter {
				title
				date(formatString: "MMMM DD YYYY")
				image
			}
		}
	}
`
