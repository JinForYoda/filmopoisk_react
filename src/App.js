import React, { useState, useEffect } from "react";
import {
	BrowserRouter
} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { FilmsContext } from "./components/context/Context";
import getGenresId from "./components/utils/getGenresId";

function App() {
	const [films, setFilms] = useState([])
	const [location, setLocation] = useState()
	const [page, setPage] = useState(1)
	const [empty, setEmpty] = useState(true)
	const [main, setMain] = useState(false)
	const [genresId, setGenresId] = useState()
	const [selectedGenre, setSelectedGenre] = useState()
	const [searchParams, setSearchParams] = useState()

	useEffect(async () => {
		setGenresId(await getGenresId())
	}, [])



	return (
		<FilmsContext.Provider value={{
			films, setFilms,
			location, setLocation,
			page, setPage,
			empty, setEmpty,
			main, setMain,
			genresId, setGenresId,
			selectedGenre, setSelectedGenre,
			searchParams, setSearchParams
		}}>
			<BrowserRouter>
				<Header />
				<AppRouter />

				<Footer />
			</BrowserRouter>

		</FilmsContext.Provider>
	);
}

export default App;
