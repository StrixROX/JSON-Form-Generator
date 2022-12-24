import Description from './Description'
import { jsonKeyJoin } from './FormElements'
import { useState, useEffect, useRef, useContext } from 'react'
import { FormDataContext } from '../FormDataContext'

export default function InputElement({ keyPrefix, schema }) {
	const {
		label,
		description,
		level,
		icon,
		jsonKey: _jsonKey,
		placeholder,
		validate,
		pattern,
	} = schema

	const jsonKey = jsonKeyJoin(keyPrefix, _jsonKey)

	const text = useRef()

	const { updateFormData } = useContext(FormDataContext)

	const [matches, setMatches] = useState(true)

	// pattern matching
	function checkInput(input) {
		if (input !== '' && !!pattern && pattern.trim() !== '') {
			const reg = new RegExp(pattern)
			return reg.test(input)
		}

		return true
	}

	function updateValue(to) {
		updateFormData({ [jsonKey]: to })

		setMatches(checkInput(to))
	}

	useEffect(() => {
		updateValue(text.current.value)
	}, [validate, text])

	return (
		<>
			<div
				className={`${
					level == 0 ? 'border px-6 py-2' : ''
				} wrapper mb-2 grid grid-cols-2 rounded-lg border-purple-100 bg-purple-50`}>
				<label
					htmlFor={jsonKey}
					className="flex content-start items-center text-sm font-medium text-gray-900">
					{icon !== '' ? <span className="mr-2">{icon}</span> : null}
					{label}
					{!!validate && validate.required ? (
						<span className="text-red-600">*</span>
					) : null}
					<Description description={description} />
				</label>
				<input
					id={jsonKey}
					ref={text}
					type="text"
					name={jsonKey}
					placeholder={placeholder}
					readOnly={!!validate ? validate.immutable : false}
					required={!!validate ? validate.required : false}
					onChange={() => updateValue(text.current.value)}
					className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring focus:ring-purple-300"
				/>

				{/* error message on pattern mismatch */}
				{matches ? null : (
					<>
						<p className="col-span-2 mt-2 border-t border-purple-200 px-1 pt-2 text-sm text-red-600">
							Invalid value
						</p>
					</>
				)}
			</div>
		</>
	)
}
