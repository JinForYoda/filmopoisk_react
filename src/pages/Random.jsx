import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GetCards from '../components/GetCards'
import useFetching from '../components/hooks/useFetching'
import MainFilm from '../components/UI/MainFilm'
import randomInt from '../components/utils/randomInit'

export default function Random() {
	const navigate = useNavigate()
	const [randomFilm, setRandomFilm] = useState({})
	const [randomId, setRandomId] = useState()
	const [isDone, setIsDone] = useState(false)

	const [fetchRandomCard, isLoading] = useFetching(async () => {

		const response = await GetCards.mainCard(randomId)
		if (response.data) {
			setRandomFilm(response.data)
			setIsDone(true)
		}
		else {
			setRandomId(randomInt(300, 10000))
		}
	})




	useEffect(() => {
		if (!window.location.search) {
			setIsDone(false)
			setRandomId(randomInt(300, 10000))
		}
		else {
			fetchRandomCard()
		}
	}, [useLocation()])

	useEffect(() => {
		if (randomId) {
			fetchRandomCard()
			navigate(`?filmId=${randomId}`)
		}
	}, [randomId])

	return (
		<main>
			{isDone && < MainFilm film={randomFilm} isLoading={isLoading} />}
		</main>


	)
}
