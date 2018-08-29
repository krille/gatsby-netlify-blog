import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo-white.svg'


const HeaderWrapper = styled.div`
	background: #524763;
	margin-bottom: 1.45rem;
	position: relative;
	overflow: hidden;
	height: ${({isHome}) => (
		isHome ? "70vh" : "20vh"
	)};

	h1 {
		img {
			height: 80px;
		}
	}
`

const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 1.45rem 1.0875rem;
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const HeaderNav = styled.nav`
	overflow: hidden;

	> ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		margin-left: -1rem;
		margin-right: -1rem;

		> li {
			padding-left: 1rem;
			padding-right: 1rem;

			> a {
				color: #fff;
				text-decoration: none;

				&:hover {
					border-bottom: 3px solid #524763;
				}
			}
		}
	}
`


export default class Header extends Component {
	componentDidUpdate = (prevProps, prevState) => {
		const { location } = this.props

		if (location.pathname === prevProps.location.pathname) {
			return;
		}

		if (this.props.location.pathname === '/') {
			this.wrapper.animate([
				{ height: '20vh' },
				{ height: '70vh' }
			], {
				duration: 300,
				fill: 'forwards',
				easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
				iterations: 1
			})
		} else {
			this.wrapper.animate([
				{ height: '70vh' },
				{ height: '20vh' }
			], {
				duration: 300,
				fill: 'forwards',
				easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
				iterations: 1
			})
		}
	}

	render() {
		const { metaData, background, location } = this.props
		return (
			<HeaderWrapper isHome={location.pathname === '/'} ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
				<HeaderContainer>
					<h1 style={{ margin: 0 }}>
						<Link
							to="/"
							style={{
								color: 'white',
								textDecoration: 'none',
							}}
						>
							<img src={logo} alt={metaData.title} />
						</Link>
					</h1>
					<HeaderNav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
						</ul>
					</HeaderNav>
				</HeaderContainer>
				<Img style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					opacity: 0.3
				}} sizes={background.sizes} />
			</HeaderWrapper>
		)
	}
}
