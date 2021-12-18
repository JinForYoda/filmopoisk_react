import React from 'react'

import '../styles/style.css'

import Title from './UI/Title'
import Search from './UI/Search'
import Navigation from './UI/Navigation'


export default function Header() {
	return (
		<header>
			<Title />
			<div className="navigation">
				<Search />
				<Navigation />
			</div>
		</header>
	)
}
