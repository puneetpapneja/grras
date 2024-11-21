import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { store } from 'store'
import { Provider } from 'react-redux'

const container = document.getElementById('app-root') as HTMLElement
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
