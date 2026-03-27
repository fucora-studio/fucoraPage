import Link from 'next/link';

export default function Footer() {
    return (
        <div className='sticky bottom-0 p-5 flex flex-row bg-fucoraBorders/60'>
                <Link href='/'><img src='null' alt='Instagram'/></Link>
                <Link href='/'className='pl-3'><img src='null' alt='GitHub'/></Link>
        </div>
    )
}