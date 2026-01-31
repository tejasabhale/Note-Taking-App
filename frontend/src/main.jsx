import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NoteProvider } from './context/NoteContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NoteProvider>
  <App />
  </NoteProvider>
  </BrowserRouter>
)

console.log("BUILD API URL =", import.meta.env.VITE_API_BASE_URL);
