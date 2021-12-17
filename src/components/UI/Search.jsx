import React from 'react'


import '../../styles/style.css'
import img from '../../images/search-interface-symbol.png'

export default function Search() {
	return (
		<div className="navigation__search">
			<input type="search" placeholder="Search" className="navigaton__search-input" />
			<a href="search.html">
				<div className="navigation__search__imgbox"><img src={img}
					className="navigation__search__imgbox-img"></img></div>
			</a>
		</div>
	)
}
