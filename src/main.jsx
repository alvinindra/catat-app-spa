import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import NoteApp from '@/components/NoteApp'
import '@/styles/global.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <NoteApp />
    <ToastContainer />
  </BrowserRouter>
)
