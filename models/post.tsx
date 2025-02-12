export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface Post extends Post {
  hashtags: string[]
}
