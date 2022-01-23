import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FilmsContext } from '../context/Context'
import getIdByGenres from '../utils/getIdByGenres'

export default function SortBar() {
	const {
		films,
		filter, setFilter,
		selectedGenre,
		search
	} = useContext(FilmsContext)

	const location = useLocation().pathname
	const sortOptions = [
		{ value: 'nameRu', name: 'По названию' },
		{ value: 'year', name: 'По дате выхода', except: '/new' }
	]

	return (
		films.length !== 0 && < div className='sortBar' >
			<input
				className='navigaton__search-input small'
				placeholder='Поиск на странице'
				onChange={event => setFilter({ ...filter, query: event.target.value })}></input>
			{
				sortOptions.map(option =>
					option.except !== location
					&&
					<span key={option.value} className={filter.sort === option.value ? 'sortItems active' : 'sortItems'} onClick={
						(event) => {

							if (event.target.classList.contains('active')) setFilter({ ...filter, sort: '' })

							else (setFilter({ ...filter, sort: option.value }))
						}
					}>
						{option.name}
					</span>
				)
			}
			{
				location === '/genres'
				&&
				<span className='spanGenre'>Поиск по жанру:<span className="spanGenre-name"> {getIdByGenres(selectedGenre * 1)}</span></span>
				||
				location === '/search'
				&&
				<span className='spanGenre'>Поиск по ключевому слову:<span className="spanGenre-name"> {search}</span></span>
			}
		</div >
	)
}
