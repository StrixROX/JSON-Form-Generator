import { JetBrains_Mono } from '@next/font/google'

const editorFont = JetBrains_Mono({ subsets: ['latin'] })

export default function SchemaInput({ scrollbarStyles }) {
	return (
		<>
			<textarea
				name="schema"
				className={`${editorFont.className} ${scrollbarStyles} h-full w-full resize-none bg-transparent outline-none`}
				placeholder="UI Schema..."
				spellCheck="false"></textarea>
		</>
	)
}
