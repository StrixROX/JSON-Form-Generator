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

	function updateVisibility() {}

	useEffect(() => {
		updateVisibility()
	}, [formData])

	return (
		<>
			<div className="wrapper">
				optional field: {jsonKey} {visible.toString()}{' '}
			</div>
		</>
	)
}
