import React, { useContext, useEffect, useRef, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import CardList from '../components/CardList';
import { FilmsContext } from '../components/context/Context';
import GetCards from '../components/GetCards'
import useFetching from '../components/hooks/useFetching';
import useObserver from '../components/hooks/useObserver';
import Loader from '../components/UI/Loader';

export default function Top() {
	const {
		films, setFilms,
		page, setPage,
		empty, setEmpty,
		searchParams, setSearchParams,
		selectedGenre,
	} = useContext(FilmsContext)
	const [totalPages, setTotalPages] = useState(0)
	const lastElement = useRef()
	const navigate = useNavigate()

	useEffect(() => {
		setSearchParams()
	}, [])

	useEffect(() => {
		if (!selectedGenre) navigate({
			search: `${createSearchParams(searchParams)}`
		})
	}, [searchParams])



	const [fetchCardsTop, isLoading] = useFetching(async () => {
		const response = await GetCards.top(page)
		setFilms([...films, ...response.data.films])
		setTotalPages(response.data.pagesCount)

	})



	useObserver(lastElement, films, page < totalPages, isLoading, () => {

		setPage(page + 1)

	})



	useEffect(() => {

		if (films.length !== 0) fetchCardsTop()

	}, [page])

	useEffect(() => {
		if (films.length === 0 && !isLoading) {
			setEmpty(true)
			fetchCardsTop()
		}
		else {
			setEmpty(false)

		}

	}, [films])

	return (


		isLoading && empty
			? <Loader />
			: < CardList lastElement={lastElement} films={films} />


	)
}
