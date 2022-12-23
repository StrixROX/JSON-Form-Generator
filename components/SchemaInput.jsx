import { useRef } from 'react'

import { JetBrains_Mono } from '@next/font/google'

const editorFont = JetBrains_Mono({ subsets: ['latin'] })

export default function SchemaInput({ scrollbarStyles, schemaUpdateHandler }) {
	const inputArea = useRef()

	function handleTab(e, tabSize = 2) {
		let val = e.target.value
		let selectionStart = e.target.selectionStart

		if (e.key === 'Tab') {
			e.preventDefault()

			inputArea.current.value =
				val.substring(0, selectionStart) +
				' '.repeat(tabSize) +
				val.substring(selectionStart)

			e.target.setSelectionRange(
				selectionStart + tabSize,
				selectionStart + tabSize
			)

			schemaUpdateHandler(inputArea.current.value)
		}
	}

	return (
		<>
			<textarea
				ref={inputArea}
				name="schema"
				className={`${editorFont.className} ${scrollbarStyles} h-full w-full cursor-text resize-none bg-transparent outline-none`}
				onChange={() => schemaUpdateHandler(inputArea.current.value)}
				onKeyDown={handleTab}
				placeholder="UI Schema..."
				spellCheck="false"></textarea>
		</>
	)
}
