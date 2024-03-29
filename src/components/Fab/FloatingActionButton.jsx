import { Outlet } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'
import LocaleContext from '@/contexts/LocaleContext'
import PropTypes from 'prop-types'
export default function FloatingActionButton({ onLogoutClicked }) {
  const { locale, toggleLocale } = useContext(LocaleContext)

  return (
    <>
      <Outlet />
      <div className="fixed bottom-4 right-4">
        <div className="flex flex-col gap-4 flex-shrink-0 justify-center">
          <button
            className="w-[50px] h-[50px] rounded-full text-white bg-blue-400 font-semibold"
            onClick={toggleLocale}
          >
            {locale === 'id' ? 'en' : 'id'}
          </button>
          <button
            className="flex w-[50px] h-[50px] rounded-full text-white bg-blue-400 text-xl"
            onClick={onLogoutClicked}
          >
            <FiLogOut className="m-auto" />
          </button>
        </div>
      </div>
    </>
  )
}

FloatingActionButton.propTypes = {
  onLogoutClicked: PropTypes.func,
}
