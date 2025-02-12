import { transformRawPostsToPosts } from '@/helpers/hashtags'
import { Post } from '@/models/post'

let cachedPosts: Post[] = []

export async function fetchRawPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return data
}

export async function getCachedPosts() {
  if (cachedPosts.length > 0) {
    return cachedPosts
  }

  const rawPosts = await fetchRawPosts()
  cachedPosts = transformRawPostsToPosts(rawPosts)

  return cachedPosts
}
