import { FC } from 'react'

const CatImg: FC<{ url: string }> = ({ url }) => {
	return (
		<div className='cat'>
			<img className='cat__img' src={url} />
		</div>
	)
}

export default CatImg
