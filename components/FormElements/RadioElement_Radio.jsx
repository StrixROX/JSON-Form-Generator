import Description from './Description'

export default function Radio({ schema, updateHandler }) {
	const { id, name, label, value, description, icon, checked, immutable } =
		schema

	return (
		<div className="radio-item-wrapper">
			<input
				type="radio"
				name={name}
				id={id}
				value={value}
				className="peer hidden"
				checked={checked}
				onChange={() => updateHandler(value)}
				disabled={immutable}
			/>
			<label
				htmlFor={id}
				className="block cursor-pointer rounded-lg border border-purple-200 px-5 py-3 text-center text-sm peer-checked:border-purple-300 peer-checked:bg-purple-100">
				{icon?.trim().length > 0 ? <span className="mr-2">{icon}</span> : null}
				{label}
				<Description description={description} />
			</label>
		</div>
	)
}
