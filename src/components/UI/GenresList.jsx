import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GenresList({ reference, isVisible }) {
	const navigate = useNavigate()
	const genres = [
		{
			query: 'comedy',
			name: 'Комедия'
		},
		{
			query: 'action',
			name: 'Боевик'
		},
		{
			query: 'drama',
			name: 'Драма'
		},
		{
			query: 'melodrama',
			name: 'Мелодрама'
		},
		{
			query: 'detective',
			name: 'Детектив'
		},
		{
			query: 'criminal',
			name: 'Криминал'
		},
		{
			query: 'fantastic',
			name: 'Фантастика'
		},
		{
			query: 'fantasy',
			name: 'Фэнтези'
		},
	]
	return (
		<div ref={reference} className={isVisible
			? "genre__block dropdown"
			: "genre__block"}>
			{
				genres.map(genre =>
					<div className="genre__block__name"><a
						className="genre__block__name-link "
						onClick={() => {
							navigate(`?${genre.query}`)
						}}
					>{genre.name}</a>
					</div>
				)
			}
		</div>

	)
}
