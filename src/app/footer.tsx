import Link from 'next/link';

export default function Footer() {
    return (
        <div className='sticky bottom-0 p-5 flex flex-row bg-fucoraBorders justify-end'>
            <div className='flex flex-row pr-1'>
                <Link href='/'>
                    <img className="w-7 h-7" src='./instagram.svg' alt='Instagram'/>
                </Link>
                <Link href='https://github.com/fucora-studio' className='pl-3'>
                    <img className='w-7 h-7' src='./GitHub_Invertocat_Black.svg' alt='GitHub'/>
                </Link>
            </div>
        </div>
    )
}