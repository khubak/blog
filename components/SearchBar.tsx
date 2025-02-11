'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'

interface Props {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-md'>
      <Input
        type='search'
        placeholder='Search posts...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='bg-gray-800 border-gray-700 text-white placeholder-gray-400'
      />
    </form>
  )
}
