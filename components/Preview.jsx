export default function Preview({ scrollbarStyles, schemaInput }) {
	return (
		<>
			<div className={`${scrollbarStyles} preview h-full w-full`}>
				{schemaInput}
			</div>
		</>
	)
}
