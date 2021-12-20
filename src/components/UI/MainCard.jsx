import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FilmsContext } from '../context/Context'
import GetCards from '../GetCards'
import useFetching from '../hooks/useFetching'
import setTime from '../utils/setTime'

export default function MainCard({ film, setMainFilm }) {


	function close(event) {
		if (
			event.target.classList.contains('movieCard')
			|| event.target.classList.contains('movieCard__main-cancel')


		) {
			setMain(false)
			navigate('')
		}

	}

	document.addEventListener('click', close)


	const navigate = useNavigate()



	const { main, setMain } = useContext(FilmsContext)

	const [fetchMainCard, isLoading] = useFetching(async () => {
		const response = await GetCards.mainCard(film.filmId)
		setMainFilm(response.data)
	})
	useEffect(() => {
		fetchMainCard()
		navigate(`?filmId=${film.filmId}`)
	}, [main])
	return (

		<div className='movieCard'>
			{!isLoading &&
				<div className="movieCard__main">

					<div className="movieCard__main__mainImg">
						<img className="movieCard__main__mainImg-img" src={film.posterUrl} />
					</div>
					<div className="movieCard__main__info">
						<div className="movieCard__main__info__title">
							<h1 className="movieCard__main__info__title-mainTitle">{film.nameRu}</h1>
							<h2 className="movieCard__main__info__title-secTitle">{film.nameOriginal ? film.nameOriginal : ""}</h2>
							<h3 className="movieCard__main__info__title-slogan">{film.slogan ? film.slogan : ""}</h3>
						</div>
						<div className="movieCard__main__info__props">
							<span className="movieCard__main__info__props-genre">Жанры: {film.genres.map(el =>
								Object.values(el).join('')).join(', ')}</span>
							<span className="movieCard__main__info__props-year">Год выпуска: {film.year}</span>
							<span className="movieCard__main__info__props-time">Длительность: {setTime(film.filmLength)}</span>
							<span className="movieCard__main__info__props-rating">{film.ratingKinopoisk ? "Рейтинг: " + film.ratingKinopoisk : ""}</span>

						</div>
						<div className="movieCard__main__info__discription">
							<p className="movieCard__main__info__discription-text">
								{film.description}
							</p>
						</div>
					</div>
					<div className="movieCard__main-cancel"></div>
				</div>}

		</div>

	)
}
