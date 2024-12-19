import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProgressSumaryProvider } from './context/progress-summary.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressSumaryProvider>
      <App />
    </ProgressSumaryProvider>
  </StrictMode>
)
