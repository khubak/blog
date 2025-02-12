import { Post } from '@/models/post'

export const extractCommonPostHashtags = (posts: Post[], numberOfHashtags = 5): string[] => {
  const hashtagCount = posts.reduce((acc: Record<string, number>, post) => {
    post.hashtags.forEach((hashtag) => {
      acc[hashtag] = (acc[hashtag] || 0) + 1
    })
    return acc
  }, {})

  return Object.entries(hashtagCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, numberOfHashtags)
    .map(([hashtag]) => hashtag)
}

const extractPostHashtags = (post: Post): string[] => {
  const text = `${post.title} ${post.body}`.toLowerCase()
  const words = text.match(/\b\w{5,}\b/g) || []
  const wordCount = words.reduce((acc: Record<string, number>, word: string) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {})

  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2)
    .map(([word]) => word)
}

export const transformRawPostsToPosts = (rawPosts: Post[]): Post[] => {
  return rawPosts.map((rawPost) => ({
    ...rawPost,
    hashtags: extractPostHashtags(rawPost),
  }))
}
