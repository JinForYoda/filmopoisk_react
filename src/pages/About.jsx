import React from 'react'
import '../styles/style.css'

export default function About() {
	return (
		<div style={{
			backgroundColor: 'var(--card-color)',
			height: '100vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			<span style={{
				color: "var(--add-color)",
				fontWeight: '400',
				fontSize: '4rem',
				pointerEvents: 'none'

			}}>Made by JinForYoda</span>
		</div>
	)
}
