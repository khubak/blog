'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className='border-b border-gray-800 container mx-auto px-4'>
      <nav className='flex items-center justify-between h-16'>
        <Link href='/' className='text-2xl font-bold text-emerald-400'>
          Miracle Tree
        </Link>
        <div className='flex gap-6'>
          <Link
            href='/'
            className={cn('text-sm transition-colors hover:text-purple-400', {
              'link-active': pathname === '/',
            })}
          >
            Blog
          </Link>
          <Link
            href='/about'
            className={cn('text-sm transition-colors hover:text-purple-400', {
              'link-active': pathname === '/about',
            })}
          >
            About
          </Link>
        </div>
        <Link
          href='/contact'
          className='inline-flex h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700'
        >
          Contact Us
        </Link>
      </nav>
    </header>
  )
}
