import React, { useRef, useContext, useState, useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FilmsContext } from '../context/Context'
import deleteFilmId from '../utils/deleteFilmId'
import setTime from '../utils/setTime'


export default function MainFilm({ film, isLoading }) {
	const closeBtn = useRef()
	const bckg = useRef()
	const [imgLoad, setImgLoad] = useState(false)

	const { setMain, location, searchParams, setSearchParams } = useContext(FilmsContext)
	const navigate = useNavigate()

	function close(event) {
		if (
			event.target === closeBtn.current
			|| event.target === bckg.current
		) {
			if (searchParams) setSearchParams(deleteFilmId(searchParams))

			navigate({
				search: `?${createSearchParams(searchParams)}`
			})
			setMain(false)

		}
	}

	if (location !== '/random') document.addEventListener('click', close)
	return (
		< div ref={bckg} className={location !== '/random' ? 'movieCard' : 'movieCard noblur'} >
			{!isLoading &&
				<div className="movieCard__main">

					<div className="movieCard__main__mainImg">
						<img onLoad={() => { setImgLoad(true) }} className="movieCard__main__mainImg-img" src={film.posterUrl} />
					</div>
					{imgLoad &&
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
						</div>}
					{imgLoad &&
						location !== '/random' &&
						<div ref={closeBtn} className="movieCard__main-cancel"></div>}

				</div>
			}

		</div>
	)
}
