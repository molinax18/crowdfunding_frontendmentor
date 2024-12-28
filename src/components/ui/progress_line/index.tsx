import { useState } from 'react'
import style from '../../styles/ProgressLine.module.css'

interface Props {
  maxVal: number
  minVal: number
}

const ProgressLine = ({ maxVal, minVal }: Props) => {
  const getPercentage = () => Math.floor((minVal / maxVal) * 100)
  const [percentage, setPercentage] = useState(getPercentage())

  return (
    <progress
      className={style.progressLine}
      max={100}
      value={percentage}
    ></progress>
  )
}

export default ProgressLine
