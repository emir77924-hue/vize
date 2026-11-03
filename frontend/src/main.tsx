import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { EventsProvider } from './context/EventsContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <EventsProvider>
        <App />
      </EventsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)