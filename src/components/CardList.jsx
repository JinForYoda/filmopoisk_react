import React, { useContext } from 'react'
import CardItem from './CardItem'
import { FilmsContext } from './context/Context';

export default function CardList({ films, lastElement }) {
	const { empty, setEmpty } = useContext(FilmsContext)
	console.log(empty);
	return (
		<main >
			{
				films.map((film) =>
					<CardItem film={film} />
				)
			}


			{empty
				? < div ref={lastElement} className='page__end' style={{
					height: '2rem',
					display: 'none'
				}}></div>

				: < div ref={lastElement} className='page__end' style={{
					height: '2rem'
				}}></div>

			}
		</main >
	)
}
