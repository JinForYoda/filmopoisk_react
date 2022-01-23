import { useEffect, useState } from 'react'


export default function useFetching(callback) {
	const [isLoading, setIsLoading] = useState(false)
	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
			//setTimeout(async () => { await callback(); setIsLoading(false) }, 3000)
		}
		finally {
			setIsLoading(false)
		}
	}
	return [fetching, isLoading]
}
