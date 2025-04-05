import { FC } from 'react'
import { IButtonProps } from '../../types/button.types'

const Button: FC<IButtonProps> = ({ onClick, text, disabled }) => {
	return (
		<button onClick={onClick} disabled={disabled} className='button'>
			{text}
		</button>
	)
}

export default Button
