import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import AddPage from '@/pages/AddPage'
import NotePage from '@/pages/NotePage'

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <main className="md:max-w-3xl md:mt-12 lg:max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
      </main>
    </div>
  )
}
