import { Reward as RwInterface } from '../../../interface/reward.interface'
import Button from '../button'
import style from '../../styles/Reward.module.css'

interface Props {
  reward: RwInterface
}

const Reward = ({ reward }: Props) => {
  const { name, pledge, description, amount } = reward

  return (
    <article className={`card ${style.rewardContainer}`}>
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
        <Button>Select Reward</Button>
      </footer>
    </article>
  )
}

export default Reward
