import React, { useContext, useState } from 'react'
import CardItem from './CardItem'
import { FilmsContext } from './context/Context';
import MainCard from './UI/MainCard';
import Loader from './UI/Loader'
import SortBar from './UI/SortBar';

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

				{main && <MainCard film={mainFilm} setMainFilm={setMainFilm} />}

				{empty
					? < div ref={lastElement} className='page__end' style={{
						height: '2rem',
						display: 'none'
					}}></div>

					: < div ref={lastElement} className='page__end' style={{
						height: '2rem',
						gridColumn: '3'
					}}><Loader /></div>

				}
			</main >
		</React.Fragment>
	)
}
