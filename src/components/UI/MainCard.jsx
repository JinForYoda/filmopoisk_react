import React, { useContext, useEffect } from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { FilmsContext } from '../context/Context'
import GetCards from '../GetCards'
import useFetching from '../hooks/useFetching'


import MainFilm from './MainFilm'

export default function MainCard({ film, setMainFilm }) {

	const { main, setMain, searchParams, setSearchParams } = useContext(FilmsContext)

	const navigate = useNavigate()
	const location = useLocation()

	const [fetchMainCard, isLoading] = useFetching(async () => {
		const response = await GetCards.mainCard(film.kinopoiskId || film.filmId)
		setMainFilm(response.data)
	})

	useEffect(() => {
		if (!location.search.includes('filmId') && film.description) setMain(false)
	}, [location])


	useEffect(() => {
		fetchMainCard()
		setSearchParams({
			...searchParams,
			filmId: film.kinopoiskId || film.filmId
		})
	}, [main])

	useEffect(() => {

		film.description && navigate({
			search: `?${createSearchParams(searchParams)}`
		})
	}, [searchParams])


	return (
		<MainFilm film={film} setMainFilm={setMainFilm} isLoading={isLoading} />
	)
}
