'use client'

import { useState, useEffect } from 'react'
import { PostCard } from '@/components/PostCard'
import { SearchBar } from '@/components/SearchBar'
import { Post } from '@/models/post'

const allHashtags = ['tech', 'web3', 'blockchain', 'development', 'ai', 'crypto']

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setFilteredPosts(data)
      })
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterPosts(query, selectedHashtags)
  }

  const handleHashtagClick = (hashtag: string) => {
    const updatedHashtags = selectedHashtags.includes(hashtag)
      ? selectedHashtags.filter((h) => h !== hashtag)
      : [...selectedHashtags, hashtag]
    setSelectedHashtags(updatedHashtags)
    filterPosts(searchQuery, updatedHashtags)
  }

  const filterPosts = (query: string, hashtags: string[]) => {
    let filtered = posts
    if (query) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase())
      )
    }
    if (hashtags.length > 0) {
      filtered = filtered.filter((post) => hashtags.some((tag) => post.title.toLowerCase().includes(tag.toLowerCase())))
    }
    setFilteredPosts(filtered)
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8 text-center'>
        <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent'>
          Latest Blog Posts
        </h1>
        <p className='text-gray-400 max-w-2xl mx-auto mb-6'>
          Explore our latest articles about Web3, blockchain technology, and decentralized solutions.
        </p>
        <div className='flex justify-center mb-6'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className='flex flex-wrap justify-center gap-2 mb-6'>
          {allHashtags.map((hashtag) => (
            <button
              key={hashtag}
              onClick={() => handleHashtagClick(hashtag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedHashtags.includes(hashtag)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              #{hashtag}
            </button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredPosts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            hashtags={allHashtags.slice(0, 2)}
            onHashtagClick={handleHashtagClick}
          />
        ))}
      </div>
    </div>
  )
}
