import { Link } from 'react-router-dom'
import { FiChevronLeft, FiPlus, FiArchive } from 'react-icons/fi'
import { useLocation, useParams } from 'react-router-dom'
import { formatDate } from '@/utils/data'
import PropTypes from 'prop-types'

function NoteAppHeader({ note, totalNote }) {
  const location = useLocation()
  const { id } = useParams()

  const isNeedBackBtn = location.pathname === `/note/${id}` || location.pathname === '/add'

  return (
    <div className="flex bg-gray-100 px-8 py-12 rounded-b-lg md:rounded-lg mb-8 text-left">
      <div className="relative">
        <div className="flex flex-row">
          {isNeedBackBtn && (
            <Link
              className="my-auto mr-4 cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition"
              to="/"
            >
              <FiChevronLeft />
            </Link>
          )}
          {location.pathname === `/note/${id}` && (
            <div className="flex flex-col">
              <h1 className="text-3xl text-blue-400 font-bold my-auto transition">{note.title}</h1>
              <div className="text-xs text-gray-600">Dibuat: {formatDate(note.createdAt)}</div>
            </div>
          )}
          {location.pathname === '/' && (
            <div className="flex flex-col">
              <h1 className="text-3xl text-blue-400 font-bold my-auto transition">Catatan</h1>
              <p className="flex flex-row text-sm font-medium text-gray-600">
                <span>Total {totalNote} catatan</span>
                <span className="hidden md:block">&nbsp;yang telah dibuat</span>
              </p>
            </div>
          )}
          {location.pathname === '/add' && (
            <h1 className="text-3xl text-blue-400 font-bold my-auto transition">Tambah Catatan</h1>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-3 ml-auto my-auto">
        <Link
          to="/add"
          className="cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition"
        >
          <FiPlus />
        </Link>
        <Link
          to="/archieve"
          className="cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition"
        >
          <FiArchive />
        </Link>
      </div>
    </div>
  )
}

NoteAppHeader.propTypes = {
  note: PropTypes.object.isRequired,
  totalNote: PropTypes.number,
}

export default NoteAppHeader
