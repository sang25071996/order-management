import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import amplifyconfig from './amplifyconfiguration.json'
import {Amplify} from 'aws-amplify';

Amplify.configure(amplifyconfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
