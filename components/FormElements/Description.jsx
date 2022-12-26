export default function Description({ description }) {
	if (!description || description.trim() === '') return null

	return (
		<>
			<div className="description-wrapper relative inline overflow-y-visible">
				<img src="/info.svg" alt="" className="peer ml-2.5 inline h-4 w-4" />
				<div className="description pointer-events-none absolute ml-3 inline-block w-max max-w-xs rounded-md border border-purple-200 bg-purple-100 px-3 py-2 text-neutral-500 opacity-0 transition-all peer-hover:pointer-events-auto peer-hover:opacity-100">
					{description.trim()}
				</div>
			</div>
		</>
	)
}
