import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { putAccessToken, getUserLogged } from '@/api/auth'
import { getStorageItem, setStorageItem } from '@/utils/storage'

import HomePage from '@/pages/HomePage'
import ArchivedPage from '@/pages/ArchivedPage'
import AddPage from '@/pages/AddPage'
import NotePage from '@/pages/NotePage'
import NotFoundPage from '@/pages/NotFoundPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import LoadingSpinner from './Base/LoadingSpinner'
import LayoutBase from './Layout/LayoutBase'
import FloatingActionButton from './Fab/FloatingActionButton'

export default function App() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [authedUser, setAuthedUser] = useState(null)
  const [locale, setLocale] = useState(getStorageItem('locale') || 'en')

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
    toast.success(`Halo, ${data.name}!`)
  }

  useEffect(() => {
    initData()
  }, [])

  const toggleLocale = () => {
    setIsLoading(true)
    setLocale((prevLocale) => {
      const localeValue = prevLocale === 'id' ? 'en' : 'id'
      setStorageItem('locale', localeValue)

      return localeValue
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    }
  }, [locale])

  return (
    <div className="w-full min-h-screen bg-white dark:bg-stone-800">
      <main className="md:max-w-3xl md:pt-12 lg:max-w-5xl mx-auto">
        <LayoutBase localeContextValue={localeContextValue}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Routes>
              {authedUser ? (
                <>
                  <Route path="/*" element={<NotFoundPage />} />
                  <Route element={<FloatingActionButton />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/notes/archived" element={<ArchivedPage />} />
                    <Route path="/notes/new" element={<AddPage />} />
                    <Route path="/notes/:id" element={<NotePage />} />
                  </Route>
                </>
              ) : (
                <>
                  <Route path="/*" element={<LoginPage onLoginSuccess={onLoginSuccess} />}></Route>
                  <Route path="/register" element={<RegisterPage />}></Route>
                </>
              )}
            </Routes>
          )}
        </LayoutBase>
      </main>
    </div>
  )
}
