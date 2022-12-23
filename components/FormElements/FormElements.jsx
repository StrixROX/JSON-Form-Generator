import InputElement from './InputElement'
import ElementGroup from './ElementGroup'

export default function generateElement(key, schema) {
	const type = schema.uiType

	if (type === 'Input') {
		return <InputElement key={key} {...schema} />
	} else if (type === 'Group') {
		return <ElementGroup key={key} {...schema} />
	}
}
