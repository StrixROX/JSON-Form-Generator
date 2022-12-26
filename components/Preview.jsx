import generateElement from './FormElements/FormElements'
import { useState, useEffect } from 'react'
import { FormDataContext } from '../context/FormDataContext'

const submitFormData = data =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(JSON.stringify(data, null, 2))
		}, 500)
	})

export default function Preview({
	scrollbarStyles,
	rawSchemaInput,
	submitHandler,
}) {
	const [parsedSchema, setParsedSchema] = useState([])
	const [formData, setFormData] = useState({})
	const [formState, setFormState] = useState('idle')
	const [reset, setReset] = useState(0)

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

	function onFormSubmit(e) {
		e.preventDefault()
		setFormState('submitting')
		submitFormData(formData)
			.then(res => {
				submitHandler(res)
			})
			.then(() => {
				setFormState('idle')
			})
	}

	function onFormReset() {
		setFormData({})
		setReset(prevVal => prevVal + 1) // re-renders the form
	}

	useEffect(() => {
		try {
			setParsedSchema(
				JSON.parse(rawSchemaInput).sort((a, b) => a.sort - b.sort) // sorting feature + checks if data passed is an array
			)
			onFormReset()
		} catch {
			if (rawSchemaInput.trim() === '') setParsedSchema([])
		}
	}, [rawSchemaInput])

	const buttonGroup = [
		{
			label: 'Reset',
			description: '',
			icon: '',
			uiType: 'Reset',
			jsonKey: 'RESET',
			formState,
			onClick: onFormReset,
		},
		{
			label: 'Submit',
			description: '',
			icon: '',
			uiType: 'Submit',
			jsonKey: 'SUBMIT',
			formState,
			onClick: () => null,
		},
	]

	return (
		<>
			<div className="preview flex h-full w-full flex-col items-center justify-start gap-2">
				<FormDataContext.Provider
					value={{
						formData,
						updateFormData,
						removeFormDataKeyGroup,
						reset,
					}}>
					<form
						onSubmit={onFormSubmit}
						className={`${scrollbarStyles} flex h-full w-full flex-col items-stretch justify-start gap-2 overflow-auto overflow-y-visible`}>
						{parsedSchema.map((el, key) => generateElement(key, el))}
						{parsedSchema.length > 0 && parsedSchema.some(x => !!x.uiType) ? (
							<div className="buttons flex w-full flex-row items-start justify-center gap-1.5">
								{buttonGroup.map((el, key) => generateElement(key, el))}
							</div>
						) : null}
					</form>
				</FormDataContext.Provider>
			</div>
		</>
	)
}
