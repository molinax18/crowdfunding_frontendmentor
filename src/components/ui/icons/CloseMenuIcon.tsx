interface Props {
  onClick: () => void
}

const CloseMenuIcon = ({ onClick }: Props) => {
  return (
    <svg
      width='14'
      height='15'
      onClick={onClick}
    >
      <g
        fill='#FFF'
        fillRule='evenodd'
      >
        <path d='M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z' />
        <path d='M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z' />
      </g>
    </svg>
  )
}

export default CloseMenuIcon
