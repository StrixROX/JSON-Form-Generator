import { useState } from 'react'

import Head from 'next/head'
import SchemaInput from '../components/SchemaInput'
import Preview from '../components/Preview'
import Result from '../components/Result'

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
	const [schema, setSchema] = useState('')
	const [response, setResponse] = useState(null)

	function schemaUpdateHandler(data) {
		setSchema(data)
	}

	function onFormSubmit(res) {
		setResponse(res)
	}
	function onResponseClosed() {
		setResponse(null)
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
				className={`${defaultFont.className} ${Theme.PAGE_BG} page-wrapper min-h-screen flex w-full flex-col flex-nowrap items-center justify-center gap-4 py-20 sm:px-10 md:gap-6 md:px-20 lg:h-screen lg:gap-8 lg:px-40 lg:py-8`}>
				<h1
					className={`${Theme.TITLE_COLOR} mb-4 text-center text-4xl font-thin leading-none tracking-tight md:text-5xl lg:text-6xl`}>
					Form Generator
				</h1>

				<div className="flex h-3/5 w-full flex-col overflow-hidden border border-gray-200 shadow-md sm:rounded-2xl lg:flex-row">
					<div
						className={`${Theme.MAIN_BG} ${Theme.INTERFACE_PADDING} schema-wrapper h-[50vh] w-full border-b-2 ${Theme.SEPARATOR_COLOR} lg:h-full lg:w-1/2 lg:border-b-0 lg:border-r-2`}>
						<SchemaInput
							scrollbarStyles={Theme.SCROLLBAR_STYLES}
							schemaUpdateHandler={schemaUpdateHandler}
						/>
					</div>
					<div></div>
					<div
						className={`${Theme.MAIN_BG} ${Theme.INTERFACE_PADDING} preview-wrapper relative h-full w-full text-lg lg:w-1/2 lg:h-full`}>
						<Preview
							scrollbarStyles={Theme.SCROLLBAR_STYLES}
							rawSchemaInput={schema}
							submitHandler={onFormSubmit}
						/>
						{response ? (
							<div className="absolute top-4 left-4 right-4 bottom-4 z-10">
								<Result
									scrollbarStyles={Theme.SCROLLBAR_STYLES}
									res={response}
									onCloseHandler={onResponseClosed}
								/>
							</div>
						) : null}
					</div>
				</div>

				<div className="flex flex-row gap-5 justify-center items-center">
					<a href="https://github.com/StrixROX/JSON-Form-Generator" target="_blank" className="flex flow-row opacity-50 hover:underline hover:decoration-solid hover:decoration-1">
						<img src="/github-mark.svg" alt="GitHub" className="h-5 px-2" />GitHub
					</a>
					<a href="https://github.com/StrixROX/JSON-Form-Generator/wiki" target="_blank" className="flex flow-row opacity-50 hover:underline hover:decoration-solid hover:decoration-1">
						<img src="/wiki.svg" alt="Wiki" className="h-5 px-2" />Wiki
					</a>
				</div>
			</div>
		</>
	)
}
