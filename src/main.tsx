import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes';
import { Toaster } from 'sonner'

import '@radix-ui/themes/styles.css';
import './index.css'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme hasBackground={false}>
      <App />
      <Toaster position="bottom-right" closeButton richColors expand={true} />
    </Theme>
  </React.StrictMode>,
)
