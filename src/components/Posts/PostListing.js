import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostTitle = styled.h2`
	margin: 0;
`

const PostListing = ({post}) => {
	const { title, date } = post.frontmatter
	return (
		<article>
			<PostTitle><Link to={post.fields.slug}>{title}</Link></PostTitle>
			<p>{date}</p>
			<p>{post.excerpt}</p>
		</article>
	)
}

export default PostListing
