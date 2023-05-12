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
  archived,
  handleDeleteNote,
  handleArchieveNote,
  handleUnArchieveNote,
}) {
  const location = useLocation()
  const isArchivedPage = location.pathname === '/notes/archived'

  const handleArchieveEvent = (event) => {
    event.preventDefault()
    isArchivedPage ? handleUnArchieveNote(event, id) : handleArchieveNote(event, id)
  }

  return (
    <Link
      className="shadow relative px-4 md:px-6 py-3 bg-gray-100 dark:bg-stone-700 rounded-lg 
    border-2 border-transparent cursor-pointer transition"
      to={`/notes/${id}`}
    >
      <div className="z-2 h-full flex flex-col dark:text-white">
        <div className="text-base capitalize font-semibold">
          <h3 className="mb-2">{title}</h3>
        </div>
        <div className="capitalize mb-auto">
          <p className="text-sm line-clamp-4">{parser(body)}</p>
        </div>
        <div className="border-t border-blue-300 my-3" />
        <div className="flex mb-3">
          <p className="text-xs text-gray-600 dark:text-gray-300">{formatDate(date)}</p>
        </div>
        <div className="absolute left-4 sm:left-[unset] sm:right-0 bottom-[-16px]">
          <button
            className={clsx(
              archived && '!bg-sky-700',
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
  archived: PropTypes.bool.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchieveNote: PropTypes.func.isRequired,
  handleUnArchieveNote: PropTypes.func.isRequired,
}
