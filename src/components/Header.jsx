import React from 'react'

import '../styles/style.css'

import Title from './UI/Title'
import Search from './UI/Search'
import Navigation from './UI/Navigation'
import { Link } from 'react-router-dom'


export default function Header() {
	return (
		<header>
			<Link to='/aboutUs'>
				<Title />
			</Link>
			<div className="navigation">
				<Search />
				<Navigation />
			</div>
		</header>
	)
}
