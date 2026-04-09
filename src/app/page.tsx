import Terminal from './component/terminal';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-134 md:min-h-140">
			<div className='flex flex-col w-fit'>
				<div className='flex flex-row'>
					<h1 className="font-bold text-2xl md:text-4xl">Fucora</h1>
					<p className='flex font-bold text-xl md:text-2xl text-foreground/40 ml-2 items-center'>[/fuːˈkɔːrə/]</p>
				</div>
				<h2 className="font-semibold text-md md:text-xl">
					Derived from Fuciphagus(Indonesian Swiftlet)<br/>
					and Phascolarctos(Australian Koala).<br/>
					A tribute to a dual heritage, built and developed on Eora land.
				</h2>
				<p className="text-sm md:text-md">Engineering the invisible. Impact by design.</p>

				<div className='flex justify-items-start pt-6'>
					<Terminal/>
				</div>
			</div>

			
		</div>
	);
}
