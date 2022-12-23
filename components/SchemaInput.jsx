import { useRef } from 'react'

import { JetBrains_Mono } from '@next/font/google'

const editorFont = JetBrains_Mono({ subsets: ['latin'] })

export default function SchemaInput({ scrollbarStyles, schemaUpdateHandler }) {
	const inputArea = useRef()

	return (
		<>
			<textarea
				ref={inputArea}
				name="schema"
				className={`${editorFont.className} ${scrollbarStyles} h-full w-full cursor-text resize-none bg-transparent outline-none`}
				onChange={() => schemaUpdateHandler(inputArea.current.value)}
				placeholder="UI Schema..."
				spellCheck="false"></textarea>
		</>
	)
}
