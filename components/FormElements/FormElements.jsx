import ElementGroup from './ElementGroup'
import InputElement from './InputElement'
import RadioElement from './RadioElement'
import OptionalFieldGroup from './OptionalFieldGroup'

export default function generateElement(key, schema, prefix = '') {
	const type = schema.uiType

	if (type === 'Input') {
		return <InputElement key={key} schema={schema} keyPrefix={prefix} />
	} else if (type === 'Group') {
		return <ElementGroup key={key} schema={schema} keyPrefix={prefix} />
	} else if (type === 'Radio') {
		return <RadioElement key={key} schema={schema} keyPrefix={prefix} />
	} else if (type === 'Ignore') {
		return <OptionalFieldGroup key={key} schema={schema} keyPrefix={prefix} />
	} else {
		return (
			<p>
				{type}_{key}
			</p>
		)
	}
}

export function jsonKeyJoin(key1, key2) {
	key1 = key1.trim()
	key2 = key2.trim()

	// clean key1
	while (key1[key1.length - 1] === '.') {
		key1 = key1.substring(0, key1.length - 1)
	}

	// clean key2
	while (key2[0] === '.') {
		key2 = key2.substring(1)
	}

	if (key1 !== '' && key2 !== '') return key1 + '.' + key2
	else if (key1 === '' && key2 !== '') return key2
	else if (key1 !== '' && key2 === '') return key1
	else return ''
}
