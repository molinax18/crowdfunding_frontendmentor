import {
  ProgressSummaryContext,
  useProgressSummary
} from '../../context/progress-summary.context'
import style from '../styles/Progress.module.css'
import ProgressLine from '../ui/progress_line'

const Progress = () => {
  const { summary } = useProgressSummary() as ProgressSummaryContext
  const { currentSummary, goal, currentBackers, daysLeft } = summary

  return (
    <section className={`${style.support} card`}>
      <div>
        <article>
          <strong>${currentSummary.toLocaleString('es-ES')}</strong>
          <span>of ${goal.toLocaleString('es-ES')} backed</span>
        </article>

        <article>
          <strong>{currentBackers.toLocaleString('es-ES')}</strong>
          <span>total backers</span>
        </article>

        <article>
          <strong>{daysLeft.toLocaleString('es-ES')}</strong>
          <span>days left</span>
        </article>
      </div>

      <ProgressLine
        maxVal={goal}
        minVal={currentSummary}
      />
    </section>
  )
}

export default Progress
