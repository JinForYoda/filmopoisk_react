import React from 'react'

import '../styles/style.css'

import Title from './UI/Title'
import Search from './UI/Search'


export default function Header() {
	return (
		<header>
			<Title />
			<div className="navigation">
				<Search />
				<div className="navigation__menu">
					<ul className="navigation__menu__block">
						<li className="navigation__menu__block-list"><a href="top.html">Топ-250</a></li>
						<li className="navigation__menu__block-list"><a href="new.html">Новинки</a></li>
						<li className="navigation__menu__block-list genre"><a className='' href="#">Жанр</a>
							<div className="genre__block ">
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Комедия</a>
								</div>
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Боевик</a>
								</div>
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Драма</a>
								</div>
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Мелодрама</a>
								</div>
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Детектив</a>
								</div>
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Криминал</a>
								</div>
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Фантастика</a>
								</div>
								<div className="genre__block__name"><a className="genre__block__name-link "
									href="genre.html">Фэнтези</a>
								</div>

							</div>

						</li>
						<li className="navigation__menu__block-list"><a href="#">Случайное</a></li>
						<li className="navigation__menu__block-list"><a href="aboutUs.html">О Нас</a></li>
					</ul>
				</div>
			</div>
		</header>
	)
}
