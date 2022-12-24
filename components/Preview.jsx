import generateElement from './FormElements/FormElements'
import { useState, useEffect } from 'react'
import { FormDataContext } from './FormDataContext'

export default function Preview({ scrollbarStyles, rawSchemaInput }) {
	const [parsedSchema, setParsedSchema] = useState([])
	const [formData, setFormData] = useState({})

	function updateFormData(data) {
		setFormData({ ...formData, ...data })
	}

	useEffect(() => {
		try {
			setParsedSchema(
				JSON.parse(rawSchemaInput).sort((a, b) => a.sort - b.sort) // sorting feature + checks if data passed is an array
			)
		} catch {
			if (rawSchemaInput.trim() === '') setParsedSchema([])
		}
	}, [rawSchemaInput])

	return (
		<>
			<div className="preview h-full w-full">
				<FormDataContext.Provider value={{ formData, updateFormData }}>
					<form
						className={`${scrollbarStyles} h-full w-full overflow-auto overflow-y-visible`}>
						{parsedSchema.map((el, key) => generateElement(key, el))}
					</form>
				</FormDataContext.Provider>
			</div>
		</>
	)
}
