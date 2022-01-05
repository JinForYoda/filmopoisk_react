import React, { useContext, useEffect, useState, useRef } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import CardList from '../components/CardList';
import { FilmsContext } from '../components/context/Context'
import GetCards from '../components/GetCards';
import useFetching from '../components/hooks/useFetching';
import { useFilterFilms } from '../components/hooks/useFilterFilms';
import useObserver from '../components/hooks/useObserver';
import Loader from '../components/UI/Loader';
import deleteFilmId from '../components/utils/deleteFilmId'

export default function Genres() {
	const {
		films, setFilms,
		page, setPage,
		empty, setEmpty,
		selectedGenre, setSelectedGenre,
		searchParams, setSearchParams,
		date, filter,
	} = useContext(FilmsContext)

	const lastElement = useRef()

	const [totalPages, setTotalPages] = useState(0)

	const navigate = useNavigate()

	useEffect(() => {
		if (selectedGenre) {
			localStorage.setItem('selectedGenre', selectedGenre)
			navigate({
				search: `${createSearchParams(searchParams)}`
			})
		}
		if (!selectedGenre) {
			setSelectedGenre(localStorage.getItem('selectedGenre'))
		}
		if (!searchParams) {

			setSearchParams(deleteFilmId(JSON.parse(localStorage.getItem('searchParams'))))
		}
	}, [searchParams, selectedGenre])

	const filterFilms = useFilterFilms(films, filter.sort, filter.query)

	const [fetchCardsGenre, isLoading] = useFetching(async () => {
		const response = await GetCards.byGenre(page, selectedGenre, date.year)
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

		if (films.length !== 0) fetchCardsGenre()

	}, [page])




	useEffect(() => {
		if (films.length === 0 && !isLoading && date) {
			setEmpty(true)
			fetchCardsGenre()
		}
		else {
			setEmpty(false)
		}

	}, [films])


	return (
		isLoading && empty
			? <Loader />
			: < CardList lastElement={lastElement} films={filterFilms} />
	)
}
