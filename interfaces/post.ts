import type Author from './author'

type PostType = {
  author: Author
  date: string
  title: string
  content: string
  excerpt: string
  coverImage: string
  ogImage: { url: string }
  slug: string
}

export default PostType