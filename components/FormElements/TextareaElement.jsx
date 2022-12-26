import { jsonKeyJoin } from './FormElements'
import Description from './Description'

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
					id={jsonKey}
					name={jsonKey}
					rows="4"
					className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 outline-none focus:ring focus:ring-purple-300"
					placeholder={placeholder}
					readOnly={validate?.immutable || false}
					required={validate?.required || false}></textarea>
			</div>
		</>
	)
}
