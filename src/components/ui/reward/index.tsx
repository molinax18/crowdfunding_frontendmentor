import { Reward as RwInterface } from '../../../interface/reward.interface'
import Button from '../button'
import style from '../../styles/Reward.module.css'

interface Props {
  reward: RwInterface
}

const Reward = ({ reward }: Props) => {
  const { name, pledge, description, amount } = reward
  const { rewardContainer, rewardDisabled } = style
  const hasDisabled = amount === 0

  return (
    <article
      className={`card ${rewardContainer} ${hasDisabled ? rewardDisabled : ''}`}
    >
      <header>
        <h3>{name}</h3>
        <span>Pledge ${pledge} or more</span>
      </header>

      <p className={`paragraph`}>{description}</p>

      <footer>
        <strong>
          {amount}
          <span>left</span>
        </strong>
        <Button disabled={hasDisabled}>Select Reward</Button>
      </footer>
    </article>
  )
}

export default Reward
