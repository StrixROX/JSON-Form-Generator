import ElementGroup from './ElementGroup'
import InputElement from './InputElement'
import RadioElement from './RadioElement'
import OptionalFieldGroup from './OptionalFieldGroup'
import SelectElement from './SelectElement'
import SwitchElement from './SwitchElement'
import SubmitButtonElement from './SubmitButtonElement'
import ResetButtonElement from './ResetButtonElement'
import TextareaElement from './TextareaElement'

export default function generateElement(key, schema, keyPrefix = '') {
	const type = schema.uiType

	if (type === 'Input') {
		return <InputElement key={key} schema={schema} keyPrefix={keyPrefix} />
	} else if (type === 'Group') {
		return <ElementGroup key={key} schema={schema} keyPrefix={keyPrefix} />
	} else if (type === 'Radio') {
		return <RadioElement key={key} schema={schema} keyPrefix={keyPrefix} />
	} else if (type === 'Ignore') {
		return (
			<OptionalFieldGroup key={key} schema={schema} keyPrefix={keyPrefix} />
		)
	} else if (type === 'Select') {
		return <SelectElement key={key} schema={schema} keyPrefix={keyPrefix} />
	} else if (type === 'Switch') {
		return <SwitchElement key={key} schema={schema} keyPrefix={keyPrefix} />
	} else if (type === 'Textarea') {
		return <TextareaElement key={key} schema={schema} keyPrefix={keyPrefix} />
	} else if (type === 'Submit') {
		return <SubmitButtonElement key={key} schema={schema} />
	} else if (type === 'Reset') {
		return <ResetButtonElement key={key} schema={schema} />
	}
}

export function jsonKeyJoin(key1, key2) {
	key1 = key1?.trim() || ''
	key2 = key2?.trim() || ''

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
