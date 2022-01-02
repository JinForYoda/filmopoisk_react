import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FilmsContext } from '../context/Context'
import getGenresById from '../utils/getGenresById'
import getKeyByValue from '../utils/getKeyByValue'


export default function GenresList({ isVisible, reference, closeAll }) {
	const {
		selectedGenre, setSelectedGenre,
		searchParams, setSearchParams
	} = useContext(FilmsContext)

	// useEffect(() => {
	// 	if (!searchParams && selectedGenre) {
	// 		console.log(getKeyByValue(getGenresById(), selectedGenre));
	// 	}
	// }, [selectedGenre])

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
						<Link className="genre__block__name-link "
							to='genres'
							onClick={() => {
								setSelectedGenre(getGenresById()[genre.name.toLowerCase()])
								setSearchParams({
									genre: genre.query
								})
								closeAll()
							}}
						>{genre.name}</Link>
					</div>
				)
			}
		</div>

	)
}
