import Description from './Description'

export default function ResetButtonElement({ schema }) {
	const { label, description, icon, formState, onClick } = schema

	function clickHandler() {
		onClick()
	}

	return (
		<>
			<button
				type="reset"
				disabled={formState === 'submitting'}
				className={`${
					formState === 'submitting'
						? 'border-puruple-300 bg-white text-purple-300'
						: 'border-purple-300 bg-white text-purple-500 focus:ring-4 focus:ring-purple-300 hover:bg-purple-50 active:bg-purple-100'
				} float-right w-1/2 rounded-lg border px-8 py-2.5 text-sm font-medium focus:outline-none`}
				onClick={clickHandler}>
				{icon !== '' ? <span className="mr-2">{icon}</span> : null}
				{label}
				<Description description={description} />
			</button>
		</>
	)
}
