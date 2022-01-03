
import axios from "axios"

export default class GetCards {

	static async search(search, page) {
		const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search}&page=${page}`, {
			headers: { 'X-API-KEY': '6d3fa7eb-964c-4dce-aa30-a6c0cd86cdf7' }
		})
		return response
	}

	static async top(page) {

		const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=' + page, {
			headers: { 'X-API-KEY': '6d3fa7eb-964c-4dce-aa30-a6c0cd86cdf7' }
		})
		return response
	}

	static async new(month, year) {

		const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`, {
			headers: { 'X-API-KEY': '6d3fa7eb-964c-4dce-aa30-a6c0cd86cdf7' }
		})
		return response
	}

	static async byGenre(page, id, year) {

		const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${id}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1888&yearTo=${year}&page=${page}`, {
			headers: { 'X-API-KEY': '6d3fa7eb-964c-4dce-aa30-a6c0cd86cdf7' }
		})

		return response
	}

	static async mainCard(id) {
		try {
			const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + id, {
				headers: { 'X-API-KEY': '6d3fa7eb-964c-4dce-aa30-a6c0cd86cdf7' }
			})
			return response
		}
		catch (e) {

			return e
		}
	}
}

