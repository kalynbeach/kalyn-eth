import Link from 'next/link'
import Nav from './nav'

export default function Header({ siteTitle }) {
  return (
    <header className='p-0 basis-36 sticky top-0 bg-night-900'>
      <div className='min-h-full flex flex-row justify-between items-center'>
        <span className='text-xl'>
          <Link href='/'>
            {siteTitle}
          </Link>
        </span>
        <Nav />
      </div>
    </header>
  )
}
