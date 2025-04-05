import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { axiosDefault } from '../api/interceptor'
import { ICatResponse } from '../types/get-cat.types'

export function useGetCatController() {
	const [isEnable, setEnable] = useState<boolean>(false)
	const [isRefresh, setRefresh] = useState<boolean>(false)

	const { data, isLoading, isFetching, refetch } = useQuery({
		queryKey: ['getCat'],
		queryFn: () =>
			axiosDefault.get<ICatResponse[]>(
				'https://api.thecatapi.com/v1/images/search'
			),
		enabled: isEnable,
		refetchInterval: isRefresh ? 5000 : 0,
	})

	const catUrl = data?.data[0].url

	function toggleEnable() {
		setEnable(prev => !prev)
	}

	function toggleRefresh() {
		setRefresh(prev => !prev)
	}

	return {
		catUrl,
		isLoading,
		isFetching,
		refetch,
		toggleEnable,
		toggleRefresh,
		isEnable,
	}
}
