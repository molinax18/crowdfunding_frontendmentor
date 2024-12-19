interface Props {
  onClick?: () => void
}

const BookmarkIcon = ({ onClick }: Props) => {
  return (
    <svg
      width='56'
      height='56'
    >
      <g
        fill='none'
        fillRule='evenodd'
      >
        <circle
          fill='#2F2F2F'
          cx='28'
          cy='28'
          r='28'
        />
        <path
          fill='#B1B1B1'
          d='M23 19v18l5-5.058L33 37V19z'
        />
      </g>
    </svg>
  )
}

export default BookmarkIcon
