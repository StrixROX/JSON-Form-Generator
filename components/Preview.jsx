import generateElement from './FormElements/FormElements'
import { useState, useEffect } from 'react'
import { FormDataContext } from '../context/FormDataContext'

export default function Preview({ scrollbarStyles, rawSchemaInput }) {
	const [parsedSchema, setParsedSchema] = useState([])
	const [formData, setFormData] = useState({})

	function updateFormData(data) {
		setFormData(prevData => ({ ...prevData, ...data }))
	}

	function removeFormDataKey(key) {
		setFormData(prevData => {
			delete prevData[key]

			return prevData
		})
	}

	function removeFormDataKeyGroup(key) {
		const pattern = new RegExp(`^${key}`)
		const keyGroup = Object.keys(formData).filter(x => pattern.test(x))
		keyGroup.forEach(key => removeFormDataKey(key))
	}

	function onFormSubmit() {
		console.log(JSON.stringify(formData, null, 2))
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
				<FormDataContext.Provider
					value={{
						formData,
						updateFormData,
						removeFormDataKey,
						removeFormDataKeyGroup,
					}}>
					<form
						className={`${scrollbarStyles} h-full w-full overflow-auto overflow-y-visible`}>
						{parsedSchema.map((el, key) => generateElement(key, el))}
						{generateElement('submit_form_button', {
							label: 'Submit',
							description: '',
							icon: '',
							uiType: 'Submit',
							jsonKey: 'SUBMIT',
							onClick: onFormSubmit,
						})}
					</form>
				</FormDataContext.Provider>
			</div>
		</>
	)
}
