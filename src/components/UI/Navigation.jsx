import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FilmsContext } from '../context/Context';
import Genres from './Genres'

export default function Navigation() {
	const { location, setLocation, page, setPage } = useContext(FilmsContext);

	const links = [
		{
			class: 'navigation__menu__block-list',
			path: '/top',
			name: 'Топ-250',

		},
		{
			class: 'navigation__menu__block-list',
			path: '/new',
			name: 'Новинки'
		},
		{
			class: 'navigation__menu__block-list genre',
			path: '/genres',
			name: "Жанр",
			child: Genres

		},
		{
			class: 'navigation__menu__block-list',
			path: '/random',
			name: "Случайное",
		},
		{
			class: 'navigation__menu__block-list',
			path: '/about',
			name: "О нас",
		}

	]

	return (
		<div className="navigation__menu">
			<ul className="navigation__menu__block">

				{

					location && links.map(link =>
						<li className={
							location.pathname === link.path
								? link.class + ' active'
								: link.class
						}>
							<Link to={link.path}>
								{link.name}
							</Link>
							{link.child ? <link.child /> : ""}
						</li>
					)
				}
			</ul>
		</div>
	)
}
