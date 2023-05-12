import { Outlet } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'
import LocaleContext from '@/contexts/LocaleContext'

export default function FloatingActionButton() {
  const { locale, toggleLocale } = useContext(LocaleContext)

  return (
    <>
      <Outlet />
      <div className="fixed bottom-4 right-4">
        <div className="flex flex-col gap-4 flex-shrink-0 justify-center">
          <button
            className="w-[40px] h-[40px] rounded-full text-white bg-blue-400 font-semibold"
            onClick={toggleLocale}
          >
            {locale === 'id' ? 'en' : 'id'}
          </button>
          <button className="flex w-[40px] h-[40px] rounded-full text-white bg-blue-400 text-xl">
            <FiLogOut className="m-auto" />
          </button>
        </div>
      </div>
    </>
  )
}
