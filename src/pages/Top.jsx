import React, { useContext, useEffect, useRef, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import CardList from '../components/CardList';
import { FilmsContext } from '../components/context/Context';
import GetCards from '../components/GetCards'
import useFetching from '../components/hooks/useFetching';
import { useFilterFilms } from '../components/hooks/useFilterFilms';
import useObserver from '../components/hooks/useObserver';
import Loader from '../components/UI/Loader';

export default function Top() {
	const {
		films, setFilms,
		page, setPage,
		empty, setEmpty,
		filter,
		searchParams,
		selectedGenre,
	} = useContext(FilmsContext)
	const [totalPages, setTotalPages] = useState(0)
	const lastElement = useRef()
	const navigate = useNavigate()

	useEffect(() => {
		if (!selectedGenre) navigate({
			search: `${createSearchParams(searchParams)}`
		})
	}, [searchParams])

	const filterFilms = useFilterFilms(films, filter.sort, filter.query)

	const [fetchCardsTop, isLoading] = useFetching(async () => {
		const response = await GetCards.top(page)
		setFilms([...films, ...response.data.films])
		setTotalPages(response.data.pagesCount)

	})

	useEffect(() => {
		if ((filter.query || filter.sort) && lastElement.current) lastElement.current.style.display = 'none'
		if (!filter.query && !filter.sort && lastElement.current) lastElement.current.style.display = 'block'
	}, [filter])

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
		else if (!isLoading) {
			setEmpty(false)
		}

	}, [films, isLoading])

	return (


		isLoading && empty
			? <Loader />
			: < CardList lastElement={lastElement} films={filterFilms} />


	)
}
