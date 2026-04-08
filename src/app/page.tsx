import Terminal from './component/terminal';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-148">
			<div className='flex flex-col w-fit'>
				<div className='flex flex-row'>
					<h1 className="font-bold text-3xl">Fucora</h1><h1 className='flex font-bold text-2xl text-foreground/40 ml-2 items-center'>[/fuːˈkɔːrə/]</h1>
				</div>
				<h2 className="font-semibold text-xl">Derived from Fuciphagus(Indonesian Swiftlet) and Phascolarctos(Australian Koala).</h2>
				<h2 className="font-semibold text-xl">A tribute to a dual heritage, built and developed on Eora land.</h2>
				<h2 className="font-semibold text-xl"></h2>
				<p className="text-md">Engineering the invisible. Impact by design.</p>

				<div className='flex justify-items-start pt-3'>
					<Terminal/>
				</div>
			</div>

			
		</div>
	);
}
