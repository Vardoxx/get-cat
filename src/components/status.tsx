import { FC } from 'react'
import { IStatusProps } from '../types/status.types'
import CatImg from './cat-img'
import Download from './download'

const Status: FC<IStatusProps> = ({
	isEnabled,
	isLoading,
	isFetching,
	url,
}) => {
	if (!isEnabled) {
		return <div>Enable checkbox to see cat</div>
	}

	if (isLoading || isFetching) {
		return <Download />
	}

	if (!url) {
		return <div>No cat found</div>
	}

	return (
		<div className='cat_container'>
			<CatImg url={url} />
		</div>
	)
}

export default Status
