import { jsonKeyJoin } from './FormElements'
import Description from './Description'
import { useContext, useEffect, useRef, useState } from 'react'
import { FormDataContext } from '../../context/FormDataContext'

export default function TextareaElement({ keyPrefix, schema }) {
	const {
		label,
		description,
		level,
		icon,
		jsonKey: _jsonKey,
		placeholder,
		validate,
	} = schema

	const jsonKey = jsonKeyJoin(keyPrefix, _jsonKey)

	const { updateFormData, reset } = useContext(FormDataContext)

	const textarea = useRef()
	const [value, setValue] = useState('')

	function updateValue(to) {
		if (!!!to) to = ''

		updateFormData({ [jsonKey]: to })

		setValue(to)
		textarea.current.value = to
	}

	useEffect(() => {
		updateValue(validate?.defaultValue)
	}, [reset])

	return (
		<>
			<div
				className={`${
					level == 0 ? 'border px-6 py-2' : ''
				} wrapper grid w-full grid-cols-2 rounded-lg border-purple-100 bg-purple-50`}>
				<label
					htmlFor={jsonKey}
					className="mb-2 block text-sm font-medium text-gray-900">
					{icon !== '' ? <span className="mr-2">{icon}</span> : null}
					{label}
					{validate?.required ? <span className="text-red-600">*</span> : null}
					<Description description={description} />
				</label>
				<textarea
					ref={textarea}
					id={jsonKey}
					name={jsonKey}
					rows="6"
					className="block w-full resize-none rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-900 outline-none focus:ring focus:ring-purple-300"
					onChange={e => updateValue(e.target.value)}
					defaultValue={validate?.defaultValue || ''}
					placeholder={placeholder}
					readOnly={validate?.immutable || false}
					required={validate?.required || false}
					maxLength={validate?.maxLength}></textarea>
			</div>
		</>
	)
}
