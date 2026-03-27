import Link from 'next/link';

export default function NavBar() {
    return (
        <div className='flex flex-row bg-gray-500 pb-1.5 shadow-white-300 shadow-xl'>
            <Link href="/" className='pt-1.5 pl-1.5'><img src="/favicon.png" alt='Logo' className='w-10 h-10'/></Link>
            <Link href="/about" className='pl-5 pt-3'>About</Link>
            <Link href="/projects" className='pl-5 pt-3'>Projects</Link>
            <Link href='/contact' className='pl-5 pt-3'>Contact</Link>
        </div>
    )
}