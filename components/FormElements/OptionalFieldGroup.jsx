import { useState, useEffect, useContext } from 'react'
import { jsonKeyJoin } from './FormElements'
import { FormDataContext } from '../FormDataContext'

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

	const { formData, updateFormData } = useContext(FormDataContext)

	const [visible, setVisible] = useState(false)

	function updateVisibility() {
		const conditionMeet = conditions.map(el => {
			const lvalue = '"' + formData[el.jsonKey] + '"'
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

		setVisible(conditionMeet.every(x => x))
	}

	useEffect(() => {
		updateVisibility()
	}, [formData])

	if (!visible) return null

	return (
		<>
			<div className="wrapper">optional field: {jsonKey}</div>
		</>
	)
}
