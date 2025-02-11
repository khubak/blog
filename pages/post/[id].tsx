import { GetStaticProps, GetStaticPaths } from 'next'
import { notFound } from 'next/navigation'
import { Post } from '@/models/post'

interface Props {
  post: Post
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  return {
    paths: posts.map((post: Post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)
  const post = await res.json()

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

export default function PostPage({ post }: Props) {
  if (!post) {
    notFound()
  }

  return (
    <article className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-4xl font-bold mb-6'>{post.title}</h1>
      <p className='text-gray-300 whitespace-pre-wrap'>{post.body}</p>
      <div className='mt-6 flex items-center gap-2 text-sm text-gray-400'>
        <span>Post ID: {post.id}</span>
        <span>•</span>
        <span>Author ID: {post.userId}</span>
      </div>
    </article>
  )
}
