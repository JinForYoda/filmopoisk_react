import React, { useContext, useState } from 'react'
import CardItem from './CardItem'
import { FilmsContext } from './context/Context';
import MainCard from './UI/MainCard';
import Loader from './UI/Loader'
import SortBar from './UI/SortBar';
import { Portal } from 'react-portal';

export default function CardList({ films, lastElement }) {
	const { empty, main } = useContext(FilmsContext)
	const [mainFilm, setMainFilm] = useState({})


	return (
		<React.Fragment>
			<SortBar />

			<main>
				{
					films.map((film) =>
						<CardItem key={film.kinopoiskId || film.filmId} setMainFilm={setMainFilm} film={film} />
					)
				}

				{main && <Portal node={document.getElementById('root')}> <MainCard film={mainFilm} setMainFilm={setMainFilm} /></Portal>}
				< div ref={lastElement} className={empty ? 'page__end hidde' : 'page__end'}>{empty ? '' : <Loader />}</div>

			</main >

		</React.Fragment>
	)
}
