import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FilmsContext } from '../context/Context';

import GenresList from './GenresList'

export default function Navigation() {
	const { location, setMain, setFilms, setPage } = useContext(FilmsContext)


	const closeAll = () => {
		setMain(false)
		setFilms([])
		setPage(1)

	}
	const genre = useRef()
	const genreBlock = useRef()
	const [isVisible, setIsVisible] = useState(false)

	const setVisible = (event) => {
		if (event.target === genre.current) setIsVisible(true)

		if (event.target !== genre.current && !genreBlock.current.contains(event.target)) setIsVisible(false)
	}
	document.addEventListener('mouseover', setVisible)


	const links = [
		{
			class: 'navigation__menu__block-list',
			path: '/top',
			name: 'Топ-250',
			active: true

		},
		{
			class: 'navigation__menu__block-list',
			path: '/new',
			name: 'Новинки',
			active: true
		},
		{
			class: 'navigation__menu__block-list genre',
			path: '/genres',
			name: "Жанр",
			child: GenresList,
			ref: genre,
			childRef: genreBlock,
			active: false


		},
		{
			class: 'navigation__menu__block-list',
			path: '/random',
			name: "Случайное",
			active: true
		},
		{
			class: 'navigation__menu__block-list',
			path: '/about',
			name: "О Нас",
			active: true
		}

	]

	return (
		<div className="navigation__menu">
			<ul className="navigation__menu__block">

				{

					location && links.map(link =>
						<li className={
							location === link.path
								? link.class + ' active'
								: link.class
						}>

							<Link onClick={link.active ? closeAll : (e) => { e.preventDefault() }} ref={link.ref && link.ref} to={link.path}>
								{link.name}
							</Link>
							{link.child
								? <link.child isVisible={isVisible} closeAll={closeAll} reference={link.childRef && link.childRef} />
								: ""
							}
						</li>
					)
				}
			</ul>
		</div>
	)
}
