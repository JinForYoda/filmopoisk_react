import React, { useContext, useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FilmsContext } from '../context/Context'
import GetCards from '../GetCards'
import useFetching from '../hooks/useFetching'


import MainFilm from './MainFilm'

export default function MainCard({ film, setMainFilm }) {

	const { main, searchParams, setSearchParams } = useContext(FilmsContext)

	const navigate = useNavigate()

	const [fetchMainCard, isLoading] = useFetching(async () => {
		const response = await GetCards.mainCard(film.kinopoiskId || film.filmId)
		setMainFilm(response.data)
	})


	useEffect(() => {
		fetchMainCard()
		setSearchParams({
			...searchParams,
			filmId: film.kinopoiskId || film.filmId
		})
	}, [main])

	useEffect(() => {
		navigate({
			search: `?${createSearchParams(searchParams)}`
		})

	}, [searchParams])


	return (
		<MainFilm film={film} isLoading={isLoading} />
	)
}
