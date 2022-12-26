import Description from './Description'

export default function SubmitButtonElement({ schema }) {
	const { label, description, icon, formState, onClick } = schema

	function submitHandler() {
		onClick()
	}

	return (
		<>
			<button
				type="submit"
				disabled={formState === 'submitting'}
				className={`${
					formState === 'submitting'
						? 'bg-purple-400 text-white'
						: 'bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 hover:bg-purple-800'
				} float-right w-1/2 rounded-lg px-8 py-2.5 text-sm font-medium focus:outline-none`}
				onSubmit={submitHandler}>
				{formState === 'submitting' ? (
					<img
						src="/loader.svg"
						className="mr-3 inline h-4 w-4 animate-spin text-white"
						style={{
							color: 'white',
						}}
					/>
				) : null}
				{icon?.trim().length > 0 ? <span className="mr-2">{icon}</span> : null}
				{label}
				<Description description={description} />
			</button>
		</>
	)
}
