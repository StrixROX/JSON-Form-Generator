import Description from './Description'

export default function ResetButtonElement({ schema }) {
	const { label, description, icon, onClick } = schema

	function clickHandler() {
		onClick()
	}

	return (
		<>
			<button
				type="reset"
				className="float-right m-1 w-1/2 rounded-lg border border-purple-300 bg-white px-8 py-2.5 text-sm font-medium text-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 hover:bg-purple-50"
				onClick={clickHandler}>
				{icon !== '' ? <span className="mr-2">{icon}</span> : null}
				{label}
				<Description description={description} />
			</button>
		</>
	)
}
