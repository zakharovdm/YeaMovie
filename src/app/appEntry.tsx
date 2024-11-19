import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/index.css'
import BaseLayout from './layouts/BaseLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseLayout />
  </StrictMode>,
)
