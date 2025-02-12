import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  id: number
  title: string
  body: string
  hashtags: string[]
  onHashtagClick: (hashtag: string) => void
}

export function PostCard({ id, title, body, hashtags, onHashtagClick }: Props) {
  return (
    <Card className='flex flex-col h-full bg-gray-900 border-gray-800 transition-transform hover:scale-[1.02]'>
      <CardHeader className='min-h-[70px] md:min-h-[100px]'>
        <CardTitle className='text-white line-clamp-2'>
          <Link href={`/post/${id}`} className='hover:text-purple-400'>
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col flex-1 gap-3 md:gap-6'>
        <p className='text-gray-400 flex-grow'>{body.slice(0, 100)}...</p>
        <div className='flex flex-wrap gap-2'>
          {hashtags.map((hashtag) => (
            <button
              key={hashtag}
              onClick={() => onHashtagClick(hashtag)}
              className='text-xs px-2 py-1 rounded-full bg-purple-600/10 text-purple-400 hover:bg-purple-600/20 transition-colors'
            >
              #{hashtag}
            </button>
          ))}
        </div>
        <Link href={`/post/${id}`} className='inline-flex items-center text-sm text-purple-400 hover:text-purple-300'>
          Read More →
        </Link>
      </CardContent>
    </Card>
  )
}
