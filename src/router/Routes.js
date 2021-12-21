import React from 'react'
import About from '../pages/About'
import Random from '../pages/Random'
import Top from '../pages/Top'

export const routes = [
	{ path: '/about', component: About, exact: true },
	// { path: '/new', component: Posts, exact: true },
	{ path: '/top', component: Top, exact: true },
	// { path: '/search', component: Error, exact: true },
	// { path: '/genre', component: Error, exact: true },
	{ path: '/random', component: Random, exact: true }
]
