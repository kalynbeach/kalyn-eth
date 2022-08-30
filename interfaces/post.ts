import type Author from './author'

type PostType = {
  slug: string
  title: string
  author: Author
  date: string
  content: string
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
}

export default PostType