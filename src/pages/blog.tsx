import { GetStaticProps } from 'next'
import Head from 'next/head'
import type Post from '../interfaces/post'
import { getAllPosts } from '../lib/blog/api'
import Layout, { siteTitle } from '../components/layout'
import HeroPost from '../components/blog/hero-post'
import MorePosts from '../components/blog/more-posts'
import styles from '../styles/pages/blog.module.scss'

const pageTitle = 'blog'
// const pageHeading = 'writing...'

type Props = {
  allPosts: Post[]
}

export default function Blog({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - ${pageTitle}`}</title>
      </Head>
      <h1>{ pageTitle }</h1>
      {/* <strong>{pageHeading}</strong> */}
      <br/>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}