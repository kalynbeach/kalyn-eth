import Avatar from './avatar'
import CoverImage from './cover-image'
import FormattedDate from './formatted-date'
import PostTitle from './post-title'
import type Author from '../../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:inline-flex items-center md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <FormattedDate className="ml-auto" dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="inline-block md:hidden text-md">
          <FormattedDate dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader