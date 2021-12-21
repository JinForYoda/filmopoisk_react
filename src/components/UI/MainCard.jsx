import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FilmsContext } from '../context/Context'
import GetCards from '../GetCards'
import useFetching from '../hooks/useFetching'


import MainFilm from './MainFilm'

export default function MainCard({ film, setMainFilm }) {

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
		<MainFilm film={film} isLoading={isLoading} />
	)
}
