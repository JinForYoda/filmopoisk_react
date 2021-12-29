import React, { useContext, useEffect } from 'react'
import {

	Routes,
	Route,
	Navigate,
	useLocation,


} from "react-router-dom";
import { FilmsContext } from '../components/context/Context';
import { routes } from './Routes';
export default function AppRouter() {
	const { setFilms,
		location, setLocation,
		setPage,
		setMain,
		setSearchParams
	} = useContext(FilmsContext);

	setLocation(useLocation().pathname)




	useEffect(() => {
		setFilms([])
		setPage(1)
		setMain(false)
		if (location !== '/genres') setSearchParams()

	}, [location])


	return (

		<Routes>{
			routes.map((route) =>
				<Route element={<route.component />} path={route.path} exact={route.exact} />)}
			<Route path='*' element={<Navigate replace to="/about" />} />
		</Routes>
	)
}
