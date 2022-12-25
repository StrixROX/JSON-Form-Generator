export default function Description({ description }) {
	if (description.trim() === '') return null

	return (
		<>
			<div className="description-wrapper relative inline overflow-y-visible">
				<span className="icon peer ml-2.5 cursor-help">ℹ️</span>
				<div className="description pointer-events-none absolute inline-block w-max max-w-xs rounded-md border border-purple-200 bg-purple-100 px-3 py-2 text-purple-400 opacity-0 transition-all peer-hover:pointer-events-auto peer-hover:opacity-100">
					{description.trim()}
				</div>
			</div>
		</>
	)
}
