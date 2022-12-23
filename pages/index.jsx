import { useState } from 'react'

import Head from 'next/head'
import SchemaInput from '../components/SchemaInput'
import Preview from '../components/Preview'

// fonts
import { Open_Sans } from '@next/font/google'

const defaultFont = Open_Sans({ subsets: ['latin'] })

const Theme = {
	TITLE_COLOR: 'text-black',
	PAGE_BG: 'bg-neutral-50',
	MAIN_BG: 'bg-white',
	INTERFACE_PADDING: 'p-6',
	SEPARATOR_COLOR: 'border-neutral-100',
	SCROLLBAR_STYLES:
		'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-500 cursor-default',
}

export default function Home() {
	const [schema, updateSchema] = useState('')

	function schemaUpdateHandler(data) {
		// assuming input is always valid schema
		updateSchema(data)
	}

	return (
		<>
			<Head>
				<title>Form Generator</title>
				<meta
					name="description"
					content="Renders form previews using UI schemas"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className={`${defaultFont.className} ${Theme.PAGE_BG} page-wrapper flex h-screen w-full flex-col flex-nowrap items-center justify-center gap-4 py-8 sm:px-10 md:gap-6 md:px-20 lg:gap-8 lg:px-40`}>
				<h1
					className={`${Theme.TITLE_COLOR} mb-4 text-4xl font-thin leading-none tracking-tight md:text-5xl lg:text-6xl`}>
					Form Generator
				</h1>
				<div className="flex h-3/5 w-full flex-row overflow-hidden border border-gray-200 shadow-md sm:rounded-2xl">
					<div
						className={`${Theme.MAIN_BG} ${Theme.INTERFACE_PADDING} schema-wrapper h-full w-full border-r-2 ${Theme.SEPARATOR_COLOR}`}>
						<SchemaInput
							scrollbarStyles={Theme.SCROLLBAR_STYLES}
							schemaUpdateHandler={schemaUpdateHandler}
						/>
					</div>
					<div
						className={`${Theme.MAIN_BG} ${Theme.INTERFACE_PADDING} preview-wrapper h-full w-full text-lg`}>
						<Preview
							scrollbarStyles={Theme.SCROLLBAR_STYLES}
							schemaInput={schema}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
