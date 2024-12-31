import style from '../../styles/BookmarkIcon.module.css'

interface Props {
  marked: boolean
}

const BookmarkIcon = ({ marked }: Props) => {
  const { bookmarkIcon, bmIconMarked } = style

  return (
    <svg
      width='56'
      height='56'
      className={`${bookmarkIcon} ${marked ? bmIconMarked : ''}`}
    >
      <g
        fill='currentColor'
        fillRule='evenodd'
      >
        <circle
          fill='currentColor'
          cx='28'
          cy='28'
          r='28'
        />
        <path
          fill='currentColor'
          d='M23 19v18l5-5.058L33 37V19z'
        />
      </g>
    </svg>
  )
}

export default BookmarkIcon
