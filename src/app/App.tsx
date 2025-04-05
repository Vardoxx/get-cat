import Status from '../components/status'
import Button from '../components/ui/button'
import CheckBox from '../components/ui/check-box'
import { useGetCatController } from '../hooks/use-get-cat-controller'
import './App.scss'

function App() {
	const {
		catUrl,
		isFetching,
		isLoading,
		refetch,
		toggleEnable,
		isEnable,
		toggleRefresh,
	} = useGetCatController()

	return (
		<div className='wrapper'>
			<div className='inputs'>
				<CheckBox text='Enable' onChange={toggleEnable} />
				<CheckBox text='Refresh every 5 sec' onChange={toggleRefresh} />
				<Button
					onClick={refetch}
					text='Get cat'
					disabled={!isEnable || isLoading || isFetching}
				/>
			</div>
			<Status
				isEnabled={isEnable}
				isLoading={isLoading}
				isFetching={isFetching}
				url={catUrl}
			/>
		</div>
	)
}

export default App
