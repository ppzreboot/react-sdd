import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { APP } from './app'

createRoot(
  document.getElementById('root')!
).render(
  <StrictMode>
    <APP />
  </StrictMode>
)
