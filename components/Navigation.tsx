'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className='border-b border-gray-800 container mx-auto px-4'>
      <nav className='flex items-center h-16 justify-between'>
        <div className='flex w-[100px] md:w-[150px] justify-start'>
          <Link href='/' className='text-md md:text-2xl font-bold text-emerald-400'>
            Miracle Tree
          </Link>
        </div>
        <div className='flex gap-6 mx-auto'>
          <Link
            href='/'
            className={cn('text-xs md:text-sm transition-colors hover:text-purple-400', {
              'link-active': pathname === '/',
            })}
          >
            Blog
          </Link>
          <Link
            href='/about'
            className={cn('text-xs md:text-sm transition-colors hover:text-purple-400', {
              'link-active': pathname === '/about',
            })}
          >
            About
          </Link>
        </div>
        <div className='flex w-[100px] md:w-[150px] justify-end'>
          <Link
            href='mailto:hubakk@gmail.com'
            className='flex w-fit h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-xs md:text-sm font-medium text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700'
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  )
}
