import Description from './Description'
import { useState } from 'react'

export default function InputElement(schema) {
	const { label, description, icon, jsonKey, placeholder, validate, pattern } =
		schema

	const [match, setMatch] = useState(true)

	// pattern matching
	function validateInput(e) {
		if (!!pattern && pattern.trim() !== '') {
			const reg = new RegExp(pattern)
			setMatch(reg.test(e.target.value))
		}
	}

	return (
		<>
			<div className="wrapper grid grid-cols-2 rounded-lg border border-purple-100 bg-purple-50 px-3 py-2">
				<label className="flex content-start items-center text-sm font-medium text-gray-900">
					{icon !== '' ? <span className="mr-2">{icon}</span> : null}
					{label}
					{!!validate && validate.required ? (
						<span className="text-red-600">*</span>
					) : null}
					<Description description={description} />
				</label>
				<input
					type="text"
					name={jsonKey}
					placeholder={placeholder}
					readOnly={!!validate ? validate.immutable : false}
					required={!!validate ? validate.required : false}
					onChange={validateInput}
					className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring focus:ring-purple-300"
				/>

				{/* error message on pattern mismatch */}
				{match ? null : (
					<>
						<p className="col-span-2 mt-2 border-t border-purple-200 pt-1.5 text-sm text-red-600">
							Invalid value
						</p>
					</>
				)}
			</div>
		</>
	)
}
