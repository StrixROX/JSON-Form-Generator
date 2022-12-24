import Radio from './RadioElement_Radio'
import { jsonKeyJoin } from './FormElements'
import { useState, useEffect } from 'react'

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

	const [value, setValue] = useState(validate?.defaultValue)

	useEffect(() => {
		setValue(validate?.defaultValue)
	}, [validate])

	return (
		<>
			<div
				className={`${
					level == 0 ? 'border' : ''
				} wrapper mb-2 grid grid-cols-2 gap-2 rounded-lg border-purple-50 bg-purple-50 px-3 py-2`}>
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
						updateHandler={to => setValue(to)}
					/>
				))}
			</div>
		</>
	)
}
