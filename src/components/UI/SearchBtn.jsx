import React, { useContext, useRef } from 'react'


import '../../styles/style.css'
import img from '../../images/search-interface-symbol.png'
import { Link, useNavigate } from 'react-router-dom'
import { FilmsContext } from '../context/Context'

export default function SearchBtn({ closeAll }) {
	const navigate = useNavigate()
	const { setSearch } = useContext(FilmsContext)
	const searchInput = useRef()
	const getSearch = (e) => {

		setSearch(searchInput.current.value)
		closeAll()
		searchInput.current.value = ""
	}
	return (
		<div className="navigation__search">
			<form onSubmit={(e) => {
				e.preventDefault()
				if (searchInput.current.value) {
					getSearch()
					navigate({
						pathname: 'search',
					})
				}
			}}  >
				<input type="search" placeholder="Search" ref={searchInput} className="navigaton__search-input" />
			</form>
			<Link to='search' onClick=
				{(e) => {
					searchInput.current.value !== '' ? getSearch() : e.preventDefault()
				}
				}>
				<div className="navigation__search__imgbox"><img src={img}
					className='navigation__search__imgbox-img'></img></div>
			</Link>
		</div>
	)
}
