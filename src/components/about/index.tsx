import { REWARDS } from '../../constants/rewards.constant'
import Reward from '../ui/reward'
import style from '../styles/About.module.css'

const About = () => {
  const { about, aboutHeaderContainer } = style

  return (
    <section className={`card ${about}`}>
      <header>
        <h2>About this project</h2>

        <div className={`paragraph ${aboutHeaderContainer}`}>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </header>

      <div>
        {REWARDS.map((rw, i) => (
          <Reward key={i} reward={rw} />
        ))}
      </div>
    </section>
  )
}

export default About
