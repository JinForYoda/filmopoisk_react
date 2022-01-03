import React, { useContext } from 'react'

import '../styles/style.css'

import Title from './UI/Title'
import SearchBtn from './UI/SearchBtn'
import Navigation from './UI/Navigation'
import { Link } from 'react-router-dom'
import { FilmsContext } from './context/Context'


export default function Header() {
	const { setMain, setFilms, setPage, setRandomId, setSearchParams } = useContext(FilmsContext)

	const closeAll = () => {
		setMain(false)
		setFilms([])
		setPage(1)
		setRandomId()
		setSearchParams()
	}
	return (
		<header>
			<Link to='/aboutUs'>
				<Title />
			</Link>
			<div className="navigation">
				<SearchBtn closeAll={closeAll} />
				<Navigation closeAll={closeAll} />
			</div>
		</header>
	)
}
