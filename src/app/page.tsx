import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-148">
			<div className='flex flex-col items-start w-fit'>
				<h1 className="font-bold text-4xl">Fucora [/fuːˈkɔːrə/]</h1>
				<h2 className="font-semibold text-xl">Derived from Fuciphagus(Indonesian Swiftlet) and</h2>
				<h2 className="font-semibold text-xl">Phascolarctos(Australian Koala). A tribute to a dual heritage,</h2>
				<h2 className="font-semibold text-xl">built and developed on Eora land.</h2>
				<p className="text-md">Made by a group of UNSW students to help others</p>
			</div>

			<div className='flex flex-row mt-5 gap-3 items-start max-w-fit'>
				<Link href="/" className='border border-transparent bg-fucoraBorders shadow-xl shadow-fucoraButton/20 rounded-2xl p-3 flex flex-row'>
					<img src='null' alt='Tally Logo'/>Tally
				</Link>

				<Link href="/" className='border border-transparent bg-fucoraBorders shadow-xl shadow-fucoraButton/20 rounded-2xl p-3 flex flex-row ml-3'>
					<img src='null' alt='To Do Logo'/>To Do
				</Link>
				
				<Link href="/" className='border border-transparent bg-fucoraBorders shadow-xl shadow-fucoraButton/20 rounded-2xl p-3 flex flex-row ml-3'>
					<img src='null' alt='Ticker Logo'/>Ticker
				</Link>
			</div>
		</div>
	);
}
