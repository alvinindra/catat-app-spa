import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { putAccessToken, getUserLogged } from '@/api/auth'

import HomePage from '@/pages/HomePage'
import ArchivedPage from '@/pages/ArchivedPage'
import AddPage from '@/pages/AddPage'
import NotePage from '@/pages/NotePage'
import NotFoundPage from '@/pages/NotFoundPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import LoadingSpinner from './Base/LoadingSpinner'

export default function App() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [authedUser, setAuthedUser] = useState(null)

  const initData = async () => {
    const { data } = await getUserLogged()
    setAuthedUser(data)
    setIsLoading(false)

    return data
  }

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken)

    const data = await initData()
    navigate('/')
    toast.success(`Halo, ${data.full_name}!`)
  }

  useEffect(() => {
    // initData()
  }, [])

  return (
    <div className="w-full min-h-screen">
      <main className="md:max-w-3xl md:mt-12 lg:max-w-5xl mx-auto">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            {authedUser ? (
              <>
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/archived" element={<ArchivedPage />} />
                <Route path="/notes/new" element={<AddPage />} />
                <Route path="/notes/:id" element={<NotePage />} />
              </>
            ) : (
              <>
                <Route path="/*" element={<LoginPage onLoginSuccess={onLoginSuccess} />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
              </>
            )}
          </Routes>
        )}
      </main>
    </div>
  )
}
