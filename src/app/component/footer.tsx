import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className='sticky bottom-0 p-2 flex flex-row justify-between bg-fucoraBorders w-screen'>
            <div/>
            <div className='md:ml-50 ml-10 flex items-center'>
                <p className='text-background text-sm '>Created on Eora Land © {year}</p>
            </div>

            <div className='flex flex-row justify-end'>
                <div className='flex flex-row pr-2'>
                    <img className='w-5 h-5 mt-0.5 md:mt-0 md:w-7 md:h-7' src='./email.png' alt='email'/>
                    <Link href='mailto:contact@fucora.app' className='pl-1 text-background hover:underline'>contact@fucora.app</Link>
                </div>
            </div>
        </div>
        
    )
}