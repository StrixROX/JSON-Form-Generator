import Radio from './RadioElement_Radio'
import { jsonKeyJoin } from './FormElements'
import { useState, useEffect, useContext } from 'react'
import { FormDataContext } from '../FormDataContext'

export default function RadioElement({ keyPrefix, schema }) {
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

	const { updateFormData } = useContext(FormDataContext)

	const [value, setValue] = useState(validate?.defaultValue)

	function checkValue(val) {
		let res = false

		validate?.options.forEach(el => {
			el?.value === val ? (res = true) : null
		})

		return res
	}

	function updateValue(to) {
		if (!checkValue(to)) to = ''

		updateFormData({ [jsonKey]: to })

		setValue(to)
	}

	useEffect(() => {
		updateValue(validate?.defaultValue)
	}, [schema])

	return (
		<>
			<div
				className={`${
					level == 0 ? 'border px-2 py-2' : ''
				} wrapper mb-2 grid grid-cols-2 gap-2 rounded-lg border-purple-50 bg-purple-50`}>
				{validate?.options.map((el, key) => (
					<Radio
						key={key}
						schema={{
							...el,
							id: key,
							name: jsonKey,
							checked: value === el.value,
							immutable: validate?.immutable,
						}}
						updateHandler={updateValue}
					/>
				))}
			</div>
		</>
	)
}
