import React, { useState, useEffect } from "react";
import {
	BrowserRouter
} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { FilmsContext } from "./components/context/Context";

import getDate from "./components/utils/getDate";

function App() {
	const [search, setSearch] = useState()
	const [films, setFilms] = useState([])
	const [page, setPage] = useState(1)
	const [empty, setEmpty] = useState(true)
	const [main, setMain] = useState(false)
	const [selectedGenre, setSelectedGenre] = useState()
	const [searchParams, setSearchParams] = useState()
	const [date, setDate] = useState()
	const [randomFilm, setRandomFilm] = useState({})
	const [randomId, setRandomId] = useState()
	const [filter, setFilter] = useState({ sort: '', query: '' })


	useEffect(() => {
		setDate(getDate())
	}, [])




	return (
		<FilmsContext.Provider value={{
			search, setSearch,
			films, setFilms,
			filter, setFilter,
			page, setPage,
			empty, setEmpty,
			main, setMain,
			selectedGenre, setSelectedGenre,
			searchParams, setSearchParams,
			randomFilm, setRandomFilm,
			randomId, setRandomId,
			date
		}}>
			<BrowserRouter basename="/filmopoisk_react">
				<Header />
				<AppRouter />

				<Footer />
			</BrowserRouter>

		</FilmsContext.Provider>
	);
}

export default App;
