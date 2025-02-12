import { useState, useCallback } from 'react'
import { PostCard } from '@/components/PostCard'
import { SearchBar } from '@/components/SearchBar'
import { Post } from '@/models/post'
import { getCachedPosts } from '@/api/posts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { extractCommonPostHashtags } from '@/helpers/hashtags'

const filterPostsData = (posts: Post[], query: string, hashtag: string): Post[] => {
  let filteredPosts = posts

  if (query) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())
    )
  }

  if (hashtag) {
    filteredPosts = filteredPosts.filter((post) => post.hashtags.includes(hashtag))
  }

  return filteredPosts
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getCachedPosts()
  const commonHashtags = extractCommonPostHashtags(posts)

  return {
    props: {
      posts,
      commonHashtags,
    },
    revalidate: 3600,
  }
}

export const Home: InferGetStaticPropsType<typeof getStaticProps> = ({
  posts,
  commonHashtags,
}: {
  posts: Post[]
  commonHashtags: string[]
}) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)
  const [selectedHashtag, setSelectedHashtag] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')

  const filterPosts = useCallback(
    (query: string, hashtag: string) => {
      const filtered = filterPostsData(posts, query, hashtag)
      setFilteredPosts(filtered)
    },
    [posts]
  )

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query)
      filterPosts(query, selectedHashtag)
    },
    [filterPosts, selectedHashtag]
  )

  const handleHashtagClick = useCallback(
    (hashtag: string) => {
      const newHashtag = selectedHashtag === hashtag ? '' : hashtag
      setSelectedHashtag(newHashtag)
      filterPosts(searchQuery, newHashtag)
    },
    [filterPosts, searchQuery, selectedHashtag]
  )

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
          {commonHashtags.map((hashtag) => (
            <button
              key={hashtag}
              onClick={() => handleHashtagClick(hashtag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedHashtag === hashtag ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
            hashtags={post.hashtags}
            onHashtagClick={handleHashtagClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
