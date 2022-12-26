export default function Result({ scrollbarStyles, res, onCloseHandler }) {
	return (
		<>
			<div className="wrapper relative h-full w-full rounded-lg bg-neutral-800">
				<button
					type="button"
					onClick={() => onCloseHandler()}
					className="absolute top-0 right-0 mx-8 my-3 text-3xl text-white">
					×
				</button>
				<pre
					className={`${scrollbarStyles} h-full w-full overflow-auto px-10 py-8 font-semibold text-cyan-500`}>
					{res}
				</pre>
			</div>
		</>
	)
}
