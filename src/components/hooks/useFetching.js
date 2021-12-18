import { useState } from 'react'

export default function useFetching(callback) {
	const [isLoading, setIsLoading] = useState(false)
	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
		}
		finally {
			setIsLoading(false)
		}
	}
	return [fetching, isLoading]
}
