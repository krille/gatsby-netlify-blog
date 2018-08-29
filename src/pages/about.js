import React, { Component } from 'react'
import Img from 'gatsby-image'

export default class About extends Component {
  render() {
	const { background } = this.props.data
	return (
	  <div>
		<h1>About us</h1>
		<Img sizes={background.sizes} />
		<p>Globally engage worldwide niches via unique scenarios. Progressively implement clicks-and-mortar materials after emerging manufactured products. Credibly foster virtual web.</p>
	  </div>
	)
  }
}

export const query = graphql`
  query AboutPageImageQuery {
		background: imageSharp(id: {regex: "/bg.jpeg/"}) {
			sizes(maxWidth: 1280, grayscale: true) {
				...GatsbyImageSharpSizes
			}
		}
  }
`
