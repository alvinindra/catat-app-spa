import { FiMoreHorizontal } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { formatDate } from '@/utils/data'
import PropTypes from 'prop-types'

function NoteItem ({ title, body, date }) {
  return (
    <Link
      className='px-4 md:px-6 py-3 bg-gray-100 rounded-lg 
    border-2 border-transparent hover:border-blue-500 cursor-pointer transition'
      to={'/note/' + 4}
    >
      <div className='text-base capitalize font-semibold'>
        <h3 className='mb-2'>{title}</h3>
      </div>
      <div className='capitalize'>
        <p className='text-sm line-clamp-4'>{body}</p>
      </div>
      <div className='border-t border-blue-300 my-3' />
      <div className='flex'>
        <p className='text-xs text-gray-600'>{formatDate(date)}</p>
        <div className='cursor-pointer ml-auto'>
          <FiMoreHorizontal />
        </div>
      </div>
    </Link>
  )
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default NoteItem
