import React, { useContext } from 'react'
import { FilmsContext } from '../context/Context';
import getGenresById from './getGenresById';

export function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

export default function getIdByGenres(selectedGenre) {

	const genres = getGenresById()
	return getKeyByValue(genres, selectedGenre)
}
