import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const container = document.getElementById('app-root') as HTMLElement
const root = createRoot(container)
root.render(<App />)
