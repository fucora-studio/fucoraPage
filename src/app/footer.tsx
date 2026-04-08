import Link from 'next/link';

export default function Footer() {
    return (
        <div className='sticky bottom-0 p-5 flex flex-row justify-between bg-fucoraBorders'>
            <div/>
            <div className='ml-50 flex items-center'>
                <p className='text-background text-sm'>Created on Eora Land © 2026</p>
            </div>

            <div className='flex flex-row justify-end'>
                <div className='flex flex-row pr-1'>
                    <img className='w-7 h-7' src='./email.png' alt='email'/>
                    <Link href='mailto:contact@fucora.app' className='pl-1 text-background hover:underline'>contact@fucora.app</Link>
                </div>
            </div>
        </div>
        
    )
}