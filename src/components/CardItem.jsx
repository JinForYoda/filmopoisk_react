import React, { useContext } from 'react'
import { FilmsContext } from './context/Context'

export default function CardItem({ film, setMainFilm }) {
	const { setMain } = useContext(FilmsContext)
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
			<div className="card__button">
				<button className="card__button-watch">Смотреть</button>
				<button onClick={() => getMainCard()} className="card__button-more">Подробнее</button>
			</div>
		</div >
	)
}
