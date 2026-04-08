import Terminal from './component/terminal';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className='flex flex-col w-fit'>
				<div className='flex flex-row'>
					<h1 className="font-bold text-3xl md:text-xl">Fucora</h1>
					<p className='flex font-bold text-2xl md:text-lg text-foreground/40 ml-2 items-center'>[/fuːˈkɔːrə/]</p>
				</div>
				<h2 className="font-semibold text-xl sm:text-md">
					Derived from Fuciphagus(Indonesian Swiftlet)<br/>
					and Phascolarctos(Australian Koala).<br/>
					A tribute to a dual heritage, built and developed on Eora land.
				</h2>
				<p className="text-md sm:text-sm">Engineering the invisible. Impact by design.</p>

				<div className='flex justify-items-start pt-3'>
					<Terminal/>
				</div>
			</div>

			
		</div>
	);
}
