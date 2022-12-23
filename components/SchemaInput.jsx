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
		}

		schemaUpdateHandler(inputArea.current.value)
	}

	function prettifyInput() {
		try {
			inputArea.current.value = JSON.stringify(
				JSON.parse(inputArea.current.value),
				null,
				2
			)
		} catch {}
	}

	return (
		<>
			<div className="wrapper relative h-full w-full">
				<textarea
					ref={inputArea}
					name="schema"
					className={`${editorFont.className} ${scrollbarStyles} h-full w-full cursor-text resize-none bg-transparent outline-none`}
					onChange={() => schemaUpdateHandler(inputArea.current.value)}
					onKeyDown={handleTab}
					placeholder="UI Schema..."
					spellCheck="false"></textarea>

				<button
					class="absolute top-0 right-0 rounded-lg border bg-white p-2 shadow-md focus:ring-2 focus:ring-slate-200 hover:bg-neutral-50"
					onClick={prettifyInput}
					title="Prettify Input">
					🪄
				</button>
			</div>
		</>
	)
}
