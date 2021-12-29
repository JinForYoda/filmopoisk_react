import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardList from '../components/CardList';
import { FilmsContext } from '../components/context/Context';
import GetCards from '../components/GetCards'
import useFetching from '../components/hooks/useFetching';
import useObserver from '../components/hooks/useObserver';
import Loader from '../components/UI/Loader';
import getDate from '../components/utils/getDate';

export default function New() {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('')

	}, [])

	const {
		films, setFilms,
		page, setPage,
		empty, setEmpty
	} = useContext(FilmsContext)
	const [totalPages, setTotalPages] = useState(0)
	const lastElement = useRef()


	const pageItems = 20;
	const [fetchCardsNew, isLoading] = useFetching(async () => {
		const [month, year] = getDate()
		const response = await GetCards.new(month, year)
		setTotalPages(Math.ceil(response.data.total / pageItems))
		setFilms([...films, ...response.data.items.splice((page - 1) * 20, pageItems)])

	})



	useObserver(lastElement, films, page < totalPages, isLoading, () => {

		setPage(page + 1)

	})



	useEffect(() => {

		if (films.length !== 0) fetchCardsNew()

	}, [page])

	useEffect(() => {
		if (films.length === 0 && !isLoading) {
			setEmpty(true)
			fetchCardsNew()
		}
		else {
			setEmpty(false)
		}

	}, [films])

	return (
		isLoading && empty
			? <Loader />
			: <CardList lastElement={lastElement} films={films} />

	)
}
