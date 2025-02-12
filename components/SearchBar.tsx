'use client'

import { useCallback } from 'react'
import { Input } from '@/components/ui/input'
import debounce from 'lodash/debounce'

interface Props {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: Props) {
  const debouncedSearch = useCallback(
    (searchQuery: string) => {
      debounce((q) => onSearch(q), 300)(searchQuery)
    },
    [onSearch]
  )

  return (
    <div className='w-full max-w-md'>
      <Input
        type='search'
        placeholder='Search posts...'
        onChange={(e) => debouncedSearch(e.target.value)}
        className='bg-gray-800 border-gray-700 text-white placeholder-gray-400'
      />
    </div>
  )
}
