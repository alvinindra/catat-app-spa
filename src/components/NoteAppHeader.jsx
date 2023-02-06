import { FiChevronLeft, FiPlus, FiArchive, FiTrash2 } from 'react-icons/fi'
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom'
import { deleteNote, formatDate } from '@/utils/data'
import PropTypes from 'prop-types'
import SearchBox from './SearchBox/SearchBox'

export default function NoteAppHeader({ note, totalNote, handleSearchKeyPress, searchKeyword }) {
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
  const isArchievedPage = location.pathname === '/notes/archieved'
  const isNotePage = location.pathname === `/notes/${id}`
  const isNeedBackBtn = [`/notes/${id}`, '/notes/new', '/notes/archieved'].includes(
    location.pathname
  )
  const isNeedSearchBox = ['/', '/notes/archieved'].includes(location.pathname)

  return (
    <div className="relative flex bg-gray-100 px-8 py-12 rounded-b-lg md:rounded-lg mb-12 text-left">
      <div className="relative">
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
              <h1 className="text-3xl text-blue-400 font-bold my-auto transition">{note.title}</h1>
              <div className="text-xs text-gray-600">Dibuat: {formatDate(note.createdAt)}</div>
            </div>
          )}
          {(isHomepage || isArchievedPage) && (
            <div className="flex flex-col">
              <h1 className="text-3xl text-blue-400 font-bold my-auto transition">
                {isArchievedPage && 'Arsip'} Catatan
              </h1>
              {totalNote > 0 && (
                <p className="flex flex-row text-sm font-medium text-gray-600">
                  <span>Total {totalNote} catatan</span>
                  <span className="hidden md:block">
                    &nbsp;yang telah {isArchievedPage ? 'diarsip' : 'dibuat'}
                  </span>
                </p>
              )}
            </div>
          )}
          {location.pathname === '/notes/new' && (
            <h1 className="text-3xl text-blue-400 font-bold my-auto transition">Tambah Catatan</h1>
          )}
        </div>
      </div>
      {isHomepage && (
        <div className="flex flex-row gap-3 ml-auto my-auto">
          <Link
            to="/notes/new"
            className="cursor-pointer p-2 text-2xl bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition"
          >
            <FiPlus />
          </Link>
          <Link
            to="/notes/archieved"
            className="cursor-pointer p-2 text-2xl bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition"
          >
            <FiArchive />
          </Link>
        </div>
      )}
      {isNotePage && (
        <div className="flex flex-row gap-3 ml-auto my-auto">
          <button
            className="cursor-pointer mr-3 p-2 bg-red-400 hover:bg-red-500 text-white hover:text-white rounded transition"
            onClick={handleDeleteDetailNote}
          >
            <FiTrash2 />
          </button>
        </div>
      )}
      {isNeedSearchBox && (
        <SearchBox handleSearchKeyPress={handleSearchKeyPress} searchKeyword={searchKeyword} />
      )}
    </div>
  )
}

NoteAppHeader.propTypes = {
  note: PropTypes.object,
  totalNote: PropTypes.number,
  handleDeleteNote: PropTypes.func,
  handleSearchKeyPress: PropTypes.func,
  searchKeyword: PropTypes.string,
}
