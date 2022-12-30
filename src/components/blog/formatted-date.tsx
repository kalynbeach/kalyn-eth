import { parseISO, format } from 'date-fns'

type Props = {
  className?: string
  dateString: string
}

const FormattedDate = ({ className, dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <time
      className={className}
      dateTime={dateString}
    >
      {format(date, 'LLLL	d, yyyy')}</time>
  )
}

export default FormattedDate