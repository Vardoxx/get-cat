import { FC } from 'react'
import { ICheckBoxProps } from '../../types/check-box.types'

const CheckBox: FC<ICheckBoxProps> = ({ text, onChange }) => {
	return (
		<div className='checkbox'>
			<input type='checkbox' className='checkbox__input' onChange={onChange} />
			<span className='checkbox__text'>{text}</span>
		</div>
	)
}

export default CheckBox
