import React, { useContext, useEffect } from 'react'
import {
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { FilmsContext } from '../components/context/Context';
import { routes } from './Routes';
export default function AppRouter() {
	const {
		setFilms
	} = useContext(FilmsContext);


	useEffect(() => {
		setFilms([])
	}, [])

	return (

		<Routes>{
			routes.map((route, index) =>
				<Route element={<route.component />} path={route.path} exact={route.exact} key={index} />)}
			<Route path='*' element={<Navigate replace to="/about" />} />
		</Routes>
	)
}
