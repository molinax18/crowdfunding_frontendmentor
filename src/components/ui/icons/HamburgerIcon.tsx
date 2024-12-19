interface Props {
  onClick: () => void
}

const HamburgerIcon = ({ onClick }: Props) => {
  return (
    <svg
      width='16'
      height='15'
      onClick={onClick}
    >
      <g
        fill='#FFF'
        fillRule='evenodd'
      >
        <path d='M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z' />
      </g>
    </svg>
  )
}

export default HamburgerIcon
