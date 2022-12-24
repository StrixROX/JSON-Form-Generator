import InputElement from './InputElement'
import ElementGroup from './ElementGroup'
import RadioElement from './RadioElement'
import OptionalField from './OptionalField'

export default function generateElement(key, schema) {
	const type = schema.uiType

	if (type === 'Input') {
		return <InputElement key={key} schema={schema} />
	} else if (type === 'Group') {
		return <ElementGroup key={key} schema={schema} />
	} else if (type === 'Radio') {
		return <RadioElement key={key} schema={schema} />
	} else if (type === 'Ignore') {
		return <OptionalField key={key} schema={schema} />
	} else {
		return (
			<p>
				{type}_{key}
			</p>
		)
	}
}
