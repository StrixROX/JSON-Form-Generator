import Description from './Description'

export default function SubmitButtonElement({ schema }) {
	const { label, description, icon, onClick } = schema

	function clickHandler() {
		onClick()
	}

	return (
		<>
			<button
				type="button"
				className="float-right m-1 w-1/2 rounded-lg bg-purple-700 px-8 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-purple-300 hover:bg-purple-800"
				onClick={clickHandler}>
				{icon !== '' ? <span className="mr-2">{icon}</span> : null}
				{label}
				<Description description={description} />
			</button>
		</>
	)
}
