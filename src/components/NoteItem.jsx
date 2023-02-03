import { FiTrash2, FiArchive } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { formatDate } from '@/utils/data'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import parser from 'html-react-parser'

export default function NoteItem({
  id,
  title,
  body,
  date,
  archieved,
  handleDeleteNote,
  handleArchieveNote,
  handleUnArchieveNote,
}) {
  const location = useLocation()
  const isArchievedPage = location.pathname === '/notes/archieved'

  const handleArchieveEvent = (event) => {
    event.preventDefault()
    isArchievedPage ? handleUnArchieveNote(event, id) : handleArchieveNote(event, id)
  }

  return (
    <Link
      className="relative flex flex-col px-4 md:px-6 py-3 bg-gray-100 rounded-lg 
    border-2 border-transparent cursor-pointer transition"
      to={`/notes/${id}`}
    >
      <div className="z-2">
        <div className="text-base capitalize font-semibold">
          <h3 className="mb-2">{title}</h3>
        </div>
        <div className="capitalize mb-auto">
          <p className="text-sm line-clamp-4">{parser(body)}</p>
        </div>
        <div className="border-t border-blue-300 my-3" />
        <div className="flex">
          <p className="text-xs text-gray-600">{formatDate(date)}</p>
        </div>
        <div className="absolute right-0 bottom-[-16px]">
          <button
            className={clsx(
              archieved && '!bg-blue-600',
              'cursor-pointer mr-3 p-2 bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition'
            )}
            onClick={(event) => handleArchieveEvent(event, id)}
          >
            <FiArchive />
          </button>
          <button
            className="cursor-pointer mr-3 p-2 bg-red-400 hover:bg-red-500 text-white hover:text-white rounded transition"
            onClick={(event) => handleDeleteNote(event, id)}
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </Link>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  archieved: PropTypes.bool.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchieveNote: PropTypes.func.isRequired,
  handleUnArchieveNote: PropTypes.func.isRequired,
}
