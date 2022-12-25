import { jsonKeyJoin } from './FormElements'
import Description from './Description'
import { useContext, useEffect, useState } from 'react'
import { FormDataContext } from '../../context/FormDataContext'

export default function SwitchElement({ keyPrefix, schema }) {
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

	const [value, setValue] = useState(false)

	function updateValue(to) {
		updateFormData({ [jsonKey]: to })

		setValue(to)
	}

	function onToggle(e) {
		updateValue(e.target.checked)
	}

	useEffect(() => {
		updateValue(!!validate?.defaultValue)
	}, [reset])

	return (
		<>
			<label
				className={`${
					level == 0 ? 'justify-start px-3 py-2' : 'justify-between'
				} relative my-2 flex w-full cursor-pointer items-center `}>
				<span className="text-sm font-medium">
					{icon !== '' ? <span className="mr-2">{icon}</span> : null}
					{label}
					{validate?.required ? <span className="text-red-600">*</span> : null}
					<Description description={description} />
				</span>
				<input
					type="checkbox"
					name={jsonKey}
					value={value}
					className="peer sr-only"
					onChange={e => onToggle(e)}
					checked={value}
					disabled={validate?.immutable}
				/>
				<div className="peer relative mx-2 h-6 w-11 rounded-full border border-purple-200 bg-purple-100 after:absolute after:top-[1px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-500 peer-checked:after:translate-x-[calc(100%-1px)] peer-checked:after:border-purple-500 peer-focus:border-purple-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300"></div>
			</label>
		</>
	)
}
