import { useState, useEffect } from 'react'

export default function Preview({ scrollbarStyles, rawSchemaInput }) {
	const [parsedSchema, setParsedSchema] = useState('[]')

	useEffect(() => {
		try {
			setParsedSchema(JSON.stringify(JSON.parse(rawSchemaInput)))
		} catch {
			if (rawSchemaInput.trim() === '') setParsedSchema('[]')
		}
	}, [rawSchemaInput])

	return (
		<>
			<div className={`${scrollbarStyles} preview h-full w-full`}>
				<pre>"{parsedSchema}"</pre>
			</div>
		</>
	)
}
