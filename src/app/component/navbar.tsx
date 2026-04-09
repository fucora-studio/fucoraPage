import Link from 'next/link';

export default function NavBar() {

    return (
        <div className='sticky top-0'>
            <div className='flex flex-row bg-fucoraCards pt-1.5 pb-1.5 shadow-xl shadow-fucoraButton/18 justify-between'>
                <div className='flex flex-row pl-1 justify-between'>
                    <Link href="/" className='pt-1.5 pl-1.5'>
                        <img src="/favicon.png" alt='Logo' className='w-10 h-10'/>
                    </Link>

                    <Link href="/about" className='pl-2.5 pt-3 text-fucoraText text-xl'>About</Link>
                    <Link href="/projects" className='pl-2.5 pt-3 text-fucoraText text-xl'>Projects</Link>
                </div>
                
                <div className='flex flex-row mt-3 mr-2'>
                    <Link href='/' className='mr-2'>
                        <img className="w-7 h-7" src='./Instagram_Glyph_White.svg' alt='Instagram'/>
                    </Link>
                    <Link href='https://github.com/fucora-studio' className='ml-3 mr-5'>
                        <img className='w-7 h-7' src='./GitHub_Invertocat_White.svg' alt='GitHub'/>
                    </Link>
                </div>

            </div>
        </div>
    )
}