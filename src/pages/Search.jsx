import React, { useContext, useEffect, useRef, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import CardList from '../components/CardList'
import { FilmsContext } from '../components/context/Context'
import GetCards from '../components/GetCards'
import useFetching from '../components/hooks/useFetching'
import { useFilterFilms } from '../components/hooks/useFilterFilms';
import useObserver from '../components/hooks/useObserver'
import Loader from '../components/UI/Loader'

export default function Search() {
	const {
		search, setSearch,
		films, setFilms,
		page, setPage,
		empty, setEmpty,
		searchParams, setSearchParams,
		filter
	} = useContext(FilmsContext)
	const [totalPages, setTotalPages] = useState(0)
	const lastElement = useRef()
	const navigate = useNavigate()

	useEffect(() => {
		if (searchParams) navigate({
			search: `${createSearchParams(searchParams)}`
		})
	}, [searchParams])

	const filterFilms = useFilterFilms(films, filter.sort, filter.query)

	useEffect(() => {
		if (search) {
			localStorage.setItem('search', search)
			setSearchParams({
				q: search
			})
		}
		if (!search) {
			setSearch(localStorage.getItem('search'))
		}
	}, [search])


	const [fetchCardsSearch, isLoading] = useFetching(async () => {
		const response = await GetCards.search(search, page)
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

		if (films.length !== 0) fetchCardsSearch()

	}, [page])

	useEffect(() => {
		if (films.length === 0 && !isLoading && search) {
			setEmpty(true)
			fetchCardsSearch()
		}
		else {
			setEmpty(false)
		}

	}, [films])
	return (
		isLoading && empty
			? < Loader />
			: < CardList lastElement={lastElement} films={filterFilms} />
	)
}
