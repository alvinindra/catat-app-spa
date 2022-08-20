import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import NotePage from '@/pages/NotePage'

function App () {
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/note' element={<NotePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
