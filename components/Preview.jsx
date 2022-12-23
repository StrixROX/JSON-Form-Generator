import { useState, useEffect } from 'react'

function generateElement(schema) {
	const type = schema.uiType

	// if (type === 'Input') {
	// }

	return <p>{JSON.stringify(schema)}</p>
}

export default function Preview({ scrollbarStyles, rawSchemaInput }) {
	const [parsedSchema, setParsedSchema] = useState([])

	useEffect(() => {
		try {
			setParsedSchema(JSON.parse(rawSchemaInput))
		} catch {
			if (rawSchemaInput.trim() === '') setParsedSchema([])
		}
	}, [rawSchemaInput])

	return (
		<>
			<div className={`${scrollbarStyles} preview h-full w-full`}>
				<form className="h-full w-full overflow-auto">
					{parsedSchema
						.sort((a, b) => a.sort - b.sort)
						.map(el => generateElement(el))}
				</form>
			</div>
		</>
	)
}
