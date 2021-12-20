import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FilmsContext } from './context/Context'

export default function CardItem({ film, setMainFilm }) {
	const { main, setMain } = useContext(FilmsContext)
	const navigate = useNavigate()
	function getMainCard() {
		setMain(true)
		setMainFilm(film)
	}

	return (
		<div className="card">
			<div className="card__imgbox">
				<img src={film.posterUrlPreview} className="card__imgbox-img" />
			</div>
			<div className="card__title">
				<span className="card__title-main">{film.nameRu}</span>
				<span className="card__title-eng">{film.nameEn}</span>
			</div>
			<div className="card__id" style={{ display: 'none' }}>{film.filmId}</div>
			<div className="card__button">
				<button className="card__button-watch">Смотреть</button>
				<button onClick={() => getMainCard()} className="card__button-more">Подробнее</button>
			</div>
		</div >
	)
}
