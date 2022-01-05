import { useMemo } from "react"
export const useSortedFilms = (films, sort) => {
	const sortedFilms = useMemo(() => {

		return sort
			? films.sort((a, b) => a[sort].localeCompare(b[sort]))
			: films
	}, [sort, films])
	return sortedFilms
}

export const useFilterFilms = (films, sort, query) => {
	const sortedFilms = useSortedFilms(films.filter(film => film.nameRu), sort)
	const filterFilms = useMemo(() => {
		return query
			? sortedFilms.filter(film => film.nameRu.toLowerCase().includes(query.toLowerCase()))
			: sortedFilms
	}, [query, sortedFilms])

	return filterFilms
}