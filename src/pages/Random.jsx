import React, { useState, useEffect, useContext } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { FilmsContext } from '../components/context/Context'
import GetCards from '../components/GetCards'
import useFetching from '../components/hooks/useFetching'
import Loader from '../components/UI/Loader'
import MainFilm from '../components/UI/MainFilm'
import randomInt from '../components/utils/randomInit'

export default function Random() {
	const navigate = useNavigate()

	const [isDone, setIsDone] = useState(false)
	const {
		searchParams, setSearchParams,
		randomFilm, setRandomFilm,
		randomId, setRandomId
	} = useContext(FilmsContext)

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

		if (!searchParams) {
			setRandomId(randomInt(300, 10000))
			setIsDone(false)
		}
	}, [searchParams])


	useEffect(() => {
		if (randomId) {
			setSearchParams({ filmId: randomId })
			fetchRandomCard()
		}
	}, [randomId])

	useEffect(() => {

		navigate({
			search: `${createSearchParams(searchParams)}`
		})


	}, [searchParams])




	return (
		<main>
			{isDone
				? < MainFilm film={randomFilm} isLoading={isLoading} />
				: <div className='loaderCenter' >
					<Loader />
				</div>
			}
		</main>


	)
}
