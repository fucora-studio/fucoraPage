import Link from 'next/link';

export default function NavBar() {
    return (
        <div className='flex flex-row bg-fucoraCards pb-1.5 shadow-xl shadow-fucoraButton/20 sticky top-0'>
            <Link href="/" className='pt-1.5 pl-1.5'><img src="/favicon.png" alt='Logo' className='w-10 h-10'/></Link>
            <Link href="/about" className='pl-5 pt-3 text-fucoraText'>About</Link>
            <Link href="/projects" className='pl-5 pt-3 text-fucoraText'>Projects</Link>
            <Link href='/contact' className='pl-5 pt-3 text-fucoraText'>Contact</Link>
        </div>
    )
}