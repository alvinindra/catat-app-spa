import { FiChevronLeft, FiPlus, FiArchive, FiMoon, FiSun, FiTrash } from 'react-icons/fi'
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom'
import { formatDate, formatDateEnglish } from '@/utils/data'
import { deleteNote } from '@/api/note'
import PropTypes from 'prop-types'
import SearchBox from '../SearchBox/SearchBox'
import useDarkside from '@/hooks/useDarkside'
import LocaleContext from '@/contexts/LocaleContext'
import { useContext } from 'react'
import { HeaderLocale } from '@/locale/page-header-locale'

export default function LayoutAppHeader({ note, totalNote, handleSearchKeyPress, searchKeyword }) {
  const { locale } = useContext(LocaleContext)
  const [colorTheme, setTheme] = useDarkside()
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const handleDeleteDetailNote = () => {
    deleteNote(id)
    navigate('/')
  }

  const handleBackBtn = () => {
    navigate(-1)
  }

  const isHomepage = location.pathname === '/'
  const isArchivedPage = location.pathname === '/notes/archived'
  const isNotePage = location.pathname === `/notes/${id}`
  const isNeedBackBtn = [`/notes/${id}`, '/notes/new', '/notes/archived'].includes(
    location.pathname
  )
  const isNeedSearchBox = ['/', '/notes/archived'].includes(location.pathname)

  return (
    <div className="relative flex bg-gray-100 dark:bg-stone-700 px-8 py-12 rounded-b-lg md:rounded-lg mb-12 text-left">
      <div className="relative mr-auto">
        <div className="flex flex-row">
          {isNeedBackBtn && (
            <button
              className="my-auto mr-4 text-2xl cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition"
              onClick={handleBackBtn}
            >
              <FiChevronLeft />
            </button>
          )}
          {isNotePage && (
            <div className="flex flex-col">
              <h1 className="text-3xl text-blue-400 dark:text-white font-bold my-auto transition">
                {note.title}
              </h1>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                {HeaderLocale[locale].createdDetail}&nbsp;
                {locale === 'en' ? formatDateEnglish(note.createdAt) : formatDate(note.createdAt)}
              </div>
            </div>
          )}
          {(isHomepage || isArchivedPage) && (
            <div className="flex flex-col">
              <h1 className="text-3xl text-blue-400 dark:text-white font-bold my-auto transition">
                {isArchivedPage ? HeaderLocale[locale].titleArchive : HeaderLocale[locale].title}
              </h1>
              {totalNote > 0 && (
                <p className="flex flex-row text-sm font-medium text-gray-600 dark:text-gray-300">
                  <span>
                    Total {totalNote} {HeaderLocale[locale].note}
                  </span>
                  <span className="hidden md:block">
                    &nbsp;
                    {isArchivedPage ? HeaderLocale[locale].archived : HeaderLocale[locale].created}
                  </span>
                </p>
              )}
            </div>
          )}
          {location.pathname === '/notes/new' && (
            <h1 className="text-3xl text-blue-400 dark:text-white font-bold my-auto transition">
              {HeaderLocale[locale].titleAdd}
            </h1>
          )}
        </div>
      </div>
      {isHomepage && (
        <div className="flex flex-row gap-3 ml-auto my-auto">
          <Link
            to="/notes/new"
            className="cursor-pointer p-2 text-2xl bg-blue-400 hover:bg-blue-500 dark:bg-s text-white hover:text-white rounded transition"
          >
            <FiPlus />
          </Link>
          <Link
            to="/notes/archived"
            className="cursor-pointer p-2 text-2xl bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition"
          >
            <FiArchive />
          </Link>
        </div>
      )}
      {isNotePage && (
        <div className="flex flex-row gap-3 ml-auto my-auto">
          <button
            className="cursor-pointer text-2xl p-2 bg-red-400 hover:bg-red-500 text-white hover:text-white rounded transition"
            onClick={handleDeleteDetailNote}
          >
            <FiTrash />
          </button>
        </div>
      )}
      <div className="flex flex-row gap-3 ml-3 my-auto">
        <button
          className="cursor-pointer p-2 text-2xl bg-stone-700 text-white dark:text-stone-700 dark:bg-white  rounded transition"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === 'dark' ? <FiMoon /> : <FiSun />}
        </button>
      </div>
      {isNeedSearchBox && (
        <SearchBox handleSearchKeyPress={handleSearchKeyPress} searchKeyword={searchKeyword} />
      )}
    </div>
  )
}

LayoutAppHeader.propTypes = {
  note: PropTypes.object,
  totalNote: PropTypes.number,
  handleDeleteNote: PropTypes.func,
  handleSearchKeyPress: PropTypes.func,
  searchKeyword: PropTypes.string,
}
