import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.tsx'



const reactElement=React.createElement(
  'a',
  {href:"https://www.google.com"},
  "Google Link"
)

createRoot(document.getElementById('root')!).render(
  <>
      <App />
    {reactElement}
  </>,
)
