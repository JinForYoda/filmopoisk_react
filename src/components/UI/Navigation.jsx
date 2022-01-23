import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


import GenresList from './GenresList'

export default function Navigation({ closeAll }) {
	const location = useLocation().pathname
	const genre = useRef()
	const genreBlock = useRef()
	const [isVisible, setIsVisible] = useState(false)

	const setVisible = (event) => {
		if (event.target === genre.current) setIsVisible(true)

		if (event.target !== genre.current && !genreBlock.current.contains(event.target)) setIsVisible(false)

	}

	if (genre.current && genreBlock.current) document.addEventListener('mouseover', setVisible)



	const links = [
		{
			class: 'navigation__menu__block-list nav_top',
			path: '/top',
			name: 'Топ-250',
			active: true

		},
		{
			class: 'navigation__menu__block-list nav_new',
			path: '/new',
			name: 'Новинки',
			active: true
		},
		{
			class: 'navigation__menu__block-list genre nav_genre',
			path: '/genres',
			name: "Жанр",
			child: GenresList,
			ref: genre,
			childRef: genreBlock,
			active: false


		},
		{
			class: 'navigation__menu__block-list nav_random',
			path: '/random',
			name: "Случайное",
			active: true
		},
		{
			class: 'navigation__menu__block-list nav_about',
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
						}
							key={link.path}>

							<Link onClick={link.active ? closeAll : (e) => { e.preventDefault() }} ref={link.ref && link.ref} to={link.path}>
								{link.name}
							</Link>
							{link.child
								? <link.child isVisible={isVisible} setIsVisible={setIsVisible} closeAll={closeAll} reference={link.childRef && link.childRef} />
								: ""
							}
						</li>
					)
				}
			</ul>
		</div>
	)
}
