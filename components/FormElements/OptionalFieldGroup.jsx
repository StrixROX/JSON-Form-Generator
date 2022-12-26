import { useState, useEffect, useContext } from 'react'
import generateElement, { jsonKeyJoin } from './FormElements'
import { FormDataContext } from '../../context/FormDataContext'

export default function OptionalFieldGroup({ keyPrefix, schema }) {
	const {
		label,
		description,
		level,
		icon,
		jsonKey: _jsonKey,
		placeholder,
		validate,
		conditions,
		subParameters,
	} = schema

	const jsonKey = jsonKeyJoin(keyPrefix, _jsonKey)

	const { formData, removeFormDataKeyGroup } = useContext(FormDataContext)

	const [visible, setVisible] = useState(false)

	function updateVisibility() {
		const conditionMeet =
			conditions && conditions.constructor == Array && conditions.length > 0
				? conditions.map(el => {
						const lvalue = '"' + (formData[el.jsonKey] || '') + '"'
						const op = el.op
						const rvalue = '"' + el.value + '"'

						let res = null
						if (lvalue && op && rvalue) {
							try {
								res = eval(lvalue + op + rvalue)
							} catch {}
						}

						return res && el.action === 'enable'
				  })
				: null

		const isVisible = !!conditionMeet?.every(x => x)

		setVisible(isVisible)
		if (!isVisible) removeFormDataKeyGroup(jsonKey)
	}

	useEffect(() => {
		updateVisibility()
	}, [formData])

	if (!visible) return null

	return (
		<>
			<div
				className={`${
					level == 0 ? 'border px-6 py-2' : ''
				} wrapper flex w-full flex-col items-stretch justify-start gap-2 rounded-lg border-purple-100 bg-purple-50`}>
				{subParameters
					?.sort((a, b) => a.sort - b.sort) // element sorting feature
					?.map((el, key) => generateElement(key, el, jsonKey))}
			</div>
		</>
	)
}
