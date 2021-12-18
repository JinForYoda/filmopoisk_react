import { useRef, useEffect } from 'react'

export default function useObserver(ref, films, canLoad, isLoading, callback) {
	const observer = useRef()


	useEffect(() => {
		if (films.length === 0 && observer.current) observer.current.disconnect()
		if (isLoading) return
		if (observer.current) observer.current.disconnect()
		var fu = function (entries) {
			if (entries[0].isIntersecting && canLoad) {
				callback()
			}
		}
		observer.current = new IntersectionObserver(fu);
		observer.current.observe(ref.current)
	}, [isLoading])
}
