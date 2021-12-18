
import axios from "axios"

export default class GetCards {

	static async top(page) {

		const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=' + page, {
			headers: { 'X-API-KEY': '6d3fa7eb-964c-4dce-aa30-a6c0cd86cdf7' }
		})
		return response
	}
	static async new() {

	}
}

