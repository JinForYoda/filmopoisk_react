import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { FilmsContext } from '../context/Context'

export default function SortBar() {
	const {
		filter, setFilter
	} = useContext(FilmsContext)

	const location = useLocation().pathname
	const sortOptions = [
		{ value: 'nameRu', name: 'По названию' },
		{ value: 'year', name: 'По дате выхода', except: '/new' }
	]
	return (
		<div className='sortBar'>
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
		</div>
	)
}
