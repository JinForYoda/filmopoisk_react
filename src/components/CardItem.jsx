import React from 'react'

export default function CardItem(film) {

	return (
		<div className="card">
			<div className="card__imgbox">
				<img src={film.film.posterUrlPreview} className="card__imgbox-img" />
			</div>
			<div className="card__title">
				<span className="card__title-main">{film.film.nameRu}</span>
				<span className="card__title-eng">{film.film.nameEn}</span>
			</div>
			<div className="card__id" style={{ display: 'none' }}>{film.film.filmId}</div>
			<div className="card__button">
				<button className="card__button-watch">Смотреть</button>
				<button className="card__button-more">Подробнее</button>
			</div>
		</div>
	)
}
