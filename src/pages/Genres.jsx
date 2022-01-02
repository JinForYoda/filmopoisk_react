import React, { useContext, useEffect, useState, useRef } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import CardList from '../components/CardList';
import { FilmsContext } from '../components/context/Context'
import GetCards from '../components/GetCards';
import useFetching from '../components/hooks/useFetching';
import useObserver from '../components/hooks/useObserver';
import Loader from '../components/UI/Loader';

export default function Genres() {

	const {
		films, setFilms,
		page, setPage,
		empty, setEmpty,
		selectedGenre, setSelectedGenre,
		searchParams,
		date
	} = useContext(FilmsContext)

	const lastElement = useRef()

	const [totalPages, setTotalPages] = useState(0)

	const navigate = useNavigate()

	useEffect(() => {
		if (selectedGenre) navigate({
			search: `${createSearchParams(searchParams)}`
		})
	}, [searchParams, selectedGenre])

	useEffect(() => {
		if (selectedGenre) {
			localStorage.setItem('selectedGenre', selectedGenre)
		}
		if (!selectedGenre) {
			setSelectedGenre(localStorage.getItem('selectedGenre'))
		}
	}, [selectedGenre])


	const [fetchCardsGenre, isLoading] = useFetching(async () => {
		const response = await GetCards.byGenre(page, selectedGenre, date.year)
		setFilms([...films, ...response.data.films])
		setTotalPages(response.data.pagesCount)
	})

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
			: < CardList lastElement={lastElement} films={films} />
	)
}
