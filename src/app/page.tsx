import Terminal from '@/components/terminal';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">	
			<div className='flex flex-col w-fit ml-5 mr-5 md:pl-0 lg:pl-0 xl:pl-0'>
				<div className='flex flex-row'>
					<h1 className="font-bold text-2xl md:text-4xl">Fucora</h1>
					<p className='flex font-bold text-xl md:text-2xl text-foreground/40 ml-2 items-center'>[/fuːˈkɔːrə/]</p>
				</div>
				<h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
					Derived from Fuciphagus(Indonesian Swiftlet)<br/>
					and Phascolarctos(Australian Koala).<br/>
					A tribute to a dual heritage, built and developed on Eora land.
				</h2>
				<p className="text-sm md:text-md">Engineering the invisible. Impact by design.</p>

				<div className='flex justify-items-start pt-5'>
					<Terminal/>
				</div>
			</div>			
		</div>
	);
}
