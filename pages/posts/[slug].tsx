import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../../lib/blog/api'
import type PostType from '../../interfaces/post'
import Layout from '../../components/layout'
import markdownToHtml from '../../lib/blog/markdownToHtml'
import PostHeader from '../../components/blog/post-header'
import PostBody from '../../components/blog/post-body'

// const pageTitle = 'hello'
// const pageHeading = 'loading...'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  // const pageTitle = `${post.title} - kalyn.eth`
  // const pageHeading = pageTitle

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title>{`${post.title} - kalyn.eth`}</title>
      </Head>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.content} />
    </Layout>
  )
}

type Params = {
  params: { slug: string }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'author',
    'date',
    'title',
    'content',
    'coverImage',
    'ogImage',
    'slug'
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: { slug: post.slug }
      }
    }),
    fallback: false
  }
}