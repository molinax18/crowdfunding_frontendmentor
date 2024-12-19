import {
  ProgressSummaryContext,
  useProgressSummary
} from '../../context/progress-summary.context'

const Progress = () => {
  const { summary } = useProgressSummary() as ProgressSummaryContext

  return <div className={`card`}>Progress</div>
}

export default Progress
