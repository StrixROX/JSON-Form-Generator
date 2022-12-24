import Description from './Description'
import generateElement, { jsonKeyJoin } from './FormElements'

export default function ElementGroup({ keyPrefix, schema }) {
	const {
		label,
		description,
		level,
		icon,
		jsonKey: _jsonKey,
		placeholder,
		validate,
		subParameters,
	} = schema

	const jsonKey = jsonKeyJoin(keyPrefix, _jsonKey)

	return (
		<>
			<div
				className={`${
					level == 0 ? 'border px-6 py-2' : ''
				} wrapper mb-2 flex flex-col items-stretch justify-start rounded-lg border-purple-100 bg-purple-50`}>
				<label className="conent-start mb-2 flex items-center border-b border-purple-200 pt-2 pb-3 text-sm font-medium text-gray-900">
					{icon !== '' ? <span className="mr-2">{icon}</span> : null}
					{label}
					{!!validate && validate.required ? (
						<span className="text-red-600">*</span>
					) : null}
					<Description description={description} />
				</label>
				{subParameters
					?.sort((a, b) => a.sort - b.sort) // element sorting feature
					?.map((el, key) => generateElement(key, el, (keyPrefix = jsonKey)))}
			</div>
		</>
	)
}
