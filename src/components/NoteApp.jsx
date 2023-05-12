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

import 'react-confirm-alert/src/react-confirm-alert.css'
import '@/components/Fab/FloatingActionButton.scss'
import { confirmAlert } from 'react-confirm-alert'
import { ConfirmationLocale } from '@/locale/auth-locale'

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

  const onLogoutClicked = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirmation dark:bg-stone-700 dark:text-white">
            <h1 className="mb-4">{ConfirmationLocale[locale].title}</h1>
            <div className="flex flex-row gap-4">
              <button
                className="bg-blue-400 px-4 py-2 rounded text-white"
                onClick={() => {
                  setAuthedUser(null)
                  putAccessToken('')
                  toast.success(ConfirmationLocale[locale].alert)
                  onClose()
                }}
              >
                {ConfirmationLocale[locale].yes}
              </button>
              <button onClick={onClose}>{ConfirmationLocale[locale].no}</button>
            </div>
          </div>
        )
      },
    })
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
                  <Route element={<FloatingActionButton onLogoutClicked={onLogoutClicked} />}>
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
