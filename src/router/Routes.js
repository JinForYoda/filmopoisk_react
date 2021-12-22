
import About from '../pages/About'
import New from '../pages/New'
import Random from '../pages/Random'
import Top from '../pages/Top'

export const routes = [
	{ path: '/about', component: About, exact: true },
	{ path: '/new', component: New, exact: true },
	{ path: '/top', component: Top, exact: true },
	// { path: '/search', component: Error, exact: true },
	// { path: '/genre', component: Error, exact: true },
	{ path: '/random', component: Random, exact: true }
]
