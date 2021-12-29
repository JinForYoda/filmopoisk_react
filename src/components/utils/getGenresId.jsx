
import axios from "axios"

export default async function getGenresId() {
	const genresId = {}
	const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.1/films/filters', {
		headers: { 'X-API-KEY': '6d3fa7eb-964c-4dce-aa30-a6c0cd86cdf7' }
	})
	response.data.genres.forEach(el => {
		genresId[el.genre] = el.id
	})

	return genresId



}
