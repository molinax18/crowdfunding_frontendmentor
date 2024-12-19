import {
  ProgressSummaryContext,
  useProgressSummary
} from '../../context/progress-summary.context'
import style from '../styles/Progress.module.css'

const Progress = () => {
  const { summary } = useProgressSummary() as ProgressSummaryContext
  const { currentSummary, goal, currentBackers, daysLeft } = summary

  return (
    <section className={`${style.support} card`}>
      <article>
        <strong>${currentSummary.toLocaleString("es-ES")}</strong>
        <span>of ${goal.toLocaleString("es-ES")} backed</span>
      </article>
      <article>
        <strong>${currentBackers.toLocaleString("es-ES")}</strong>
        <span>total backers</span>
      </article>
      <article>
        <strong>${daysLeft.toLocaleString("es-ES")}</strong>
        <span>days left</span>
      </article>
    </section>
  )
}

export default Progress
