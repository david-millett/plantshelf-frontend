import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Styling
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './assets/styles/main.scss'
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        {<App />}
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)