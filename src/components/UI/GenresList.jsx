import React, { useContext, useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FilmsContext } from '../context/Context'

export default function GenresList({ isVisible, reference }) {
	const {
		genresId,
		selectedGenre, setSelectedGenre,
		searchParams, setSearchParams
	} = useContext(FilmsContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (selectedGenre) navigate({
			pathname: 'genres',
			search: `?${createSearchParams(searchParams)}`,
		})
	}, [selectedGenre])

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
					<div className="genre__block__name">
						<a className="genre__block__name-link "
							onClick={() => {
								setSelectedGenre(genresId[genre.name.toLowerCase()])
								setSearchParams({
									genre: genre.query
								})
							}}
						>{genre.name}</a>
					</div>
				)
			}
		</div>

	)
}
