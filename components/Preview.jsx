import { useState, useEffect } from 'react'

import generateElement from './FormElements/FormElements'

export default function Preview({ scrollbarStyles, rawSchemaInput }) {
	const [parsedSchema, setParsedSchema] = useState([])
	const [formData, setFormData] = useState({})

	useEffect(() => {
		try {
			setParsedSchema(JSON.parse(rawSchemaInput))
		} catch {
			if (rawSchemaInput.trim() === '') setParsedSchema([])
		}
	}, [rawSchemaInput])

	function formInputUpdateHandler(data) {
		console.log(data)
	}

	return (
		<>
			<div className="preview h-full w-full">
				<form
					className={`${scrollbarStyles} h-full w-full overflow-auto overflow-y-visible`}>
					{parsedSchema
						.sort((a, b) => a.sort - b.sort) // element sorting feature
						.map((el, key) => generateElement(key, el, formInputUpdateHandler))}
				</form>
			</div>
		</>
	)
}
