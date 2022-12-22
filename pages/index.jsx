import Head from 'next/head'
import SchemaInput from '../components/SchemaInput'
import Preview from '../components/Preview'

// fonts
import { Open_Sans } from '@next/font/google'

const defaultFont = Open_Sans({ subsets: ['latin'] })

export default function Home() {
	const TITLE_COLOR = 'text-black'
	const PAGE_BG = 'bg-neutral-50'
	const MAIN_BG = 'bg-white'
	const INTERFACE_PADDING = 'p-6'
	const SEPARATOR_COLOR = 'border-neutral-100'

	const scrollbarStyles =
		'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-500 cursor-default'

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
				className={`${defaultFont.className} ${PAGE_BG} page-wrapper flex h-screen w-full flex-col flex-nowrap items-center justify-center gap-4 py-8 sm:px-10 md:gap-6 md:px-20 lg:gap-8 lg:px-40`}>
				<h1
					className={`${TITLE_COLOR} mb-4 text-4xl font-thin leading-none tracking-tight md:text-5xl lg:text-6xl`}>
					Form Generator
				</h1>
				<div className="flex h-3/5 w-full flex-row overflow-hidden border border-gray-200 shadow-md sm:rounded-2xl">
					<div
						className={`${MAIN_BG} ${INTERFACE_PADDING} schema-wrapper h-full w-full border-r-2 ${SEPARATOR_COLOR}`}>
						<SchemaInput scrollbarStyles={scrollbarStyles} />
					</div>
					<div
						className={`${MAIN_BG} ${INTERFACE_PADDING} preview-wrapper h-full w-full text-lg`}>
						<Preview scrollbarStyles={scrollbarStyles} />
					</div>
				</div>
				<button class="rounded-xl bg-purple-700 px-6 py-3.5 text-center text-base font-medium text-white shadow-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 hover:bg-purple-800">
					Generate Preview
				</button>
			</div>
		</>
	)
}
