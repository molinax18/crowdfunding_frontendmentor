import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { Summary } from '../interface/progress-summary.interface'

export interface ProgressSummaryContext {
  summary: Summary
  useSummary: Dispatch<SetStateAction<Summary>>
}

interface Props {
  children: React.ReactNode
}

const initialState: Summary = {
  currentSummary: 89.914,
  goal: 100.000,
  currentBackers: 5.007,
  daysLeft: 56
}

const ProgressSummary = createContext<ProgressSummaryContext | null>(null)

export const ProgressSumaryProvider = ({ children }: Props) => {
  const [summary, useSummary] = useState<Summary>(initialState)

  return (
    <ProgressSummary.Provider value={{ summary, useSummary }}>
      {children}
    </ProgressSummary.Provider>
  )
}

export const useProgressSummary = () => useContext(ProgressSummary)