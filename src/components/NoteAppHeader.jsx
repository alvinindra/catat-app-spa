import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArchive, FiMoon } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function NoteAppHeader ({ totalNote }) {
  const { id } = useParams()

  return (
    <div className='flex bg-gray-100 px-8 py-12 rounded-b-lg md:rounded-lg mb-8 text-left'>
      <div className='relative'>
        <Link to='/'>
          <h1 className='text-3xl text-blue-400 hover:text-blue-500 font-bold mb-2 transition'>
            Catatan {id}
          </h1>
        </Link>
        <p className='flex flex-row text-sm font-medium text-gray-600'>
          <span>Total {totalNote} catatan</span>
          <span className='hidden md:block'>&nbsp;yang telah dibuat</span>
        </p>
      </div>
      <div className='flex flex-row gap-3 ml-auto my-auto'>
        <Link
          to='/add'
          className='cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition'
        >
          <FiPlus />
        </Link>
        <Link
          to='/archieve'
          className='cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 text-white hover:text-white rounded transition'
        >
          <FiArchive />
        </Link>
        <div className='cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 text-white rounded transition'>
          <FiMoon />
        </div>
      </div>
    </div>
  )
}

NoteAppHeader.propTypes = {
  totalNote: PropTypes.number.isRequired
}

export default NoteAppHeader
