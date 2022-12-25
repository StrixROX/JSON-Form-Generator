import { jsonKeyJoin } from './FormElements'
import Description from './Description'
import { useContext, useEffect, useState } from 'react'
import { FormDataContext } from '../FormDataContext'

export default function SelectElement({ keyPrefix, schema }) {
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

	const [value, setValue] = useState(null)
	const [selection, setSelection] = useState(null)

	function checkValue(val) {
		if (!validate?.options) return null

		let res = false
		validate.options.forEach((el, key) => {
			el.value === val ? (res = true) : null
		})

		return res
	}

	// function names need refactoring
	function updateSelection(to) {
		if (!validate?.options) return null

		let res = null
		validate.options.forEach((el, key) => {
			el.value === to ? (res = el) : null
		})

		setSelection(res)
	}

	function onSelectionUpdate(to) {
		if (!checkValue(to)) to = ''

		updateFormData({ [jsonKey]: to })

		setValue(to)
		updateSelection(to)
	}

	useEffect(() => {
		onSelectionUpdate(validate?.defaultValue)
	}, [])

	return (
		<>
			<div
				className={`${
					level == 0 ? 'border px-6 py-2' : ''
				} wrapper mb-2 grid grid-cols-2 rounded-lg border-purple-100 bg-purple-50 text-sm`}>
				<label
					htmlFor={jsonKey}
					className="flex h-full items-center justify-start font-medium">
					{icon !== '' ? <span className="mr-2">{icon}</span> : null}
					{label}
					{validate?.required ? <span className="text-red-600">*</span> : null}
					<Description description={description} />
				</label>

				<select
					name={jsonKey}
					id={jsonKey}
					className={`${
						selection?.description ? 'row-span-2' : ''
					} block w-full rounded-lg border border-purple-200 bg-white p-2 text-gray-900 outline-none focus:border-purple-300 focus:ring focus:ring-purple-300`}
					onChange={e => onSelectionUpdate(e.target.value)}
					required={validate?.required}
					disabled={validate?.immutable}>
					{validate?.options?.map((el, key) => (
						<option
							key={key}
							value={el.value}
							defaultValue={el.value === value}>
							{el.label}
						</option>
					))}
				</select>

				{selection ? (
					<div
						className="desc overflow-hidden text-ellipsis whitespace-nowrap pr-8 text-xs text-gray-400"
						title={selection.description}>
						{selection.icon !== '' ? (
							<span className="mr-2">{selection.icon}</span>
						) : null}
						{selection.description}
					</div>
				) : null}
			</div>
		</>
	)
}
