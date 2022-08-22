import { FiMoreHorizontal } from 'react-icons/fi'

function NoteItem () {
  return (
    <div
      className='px-4 md:px-6 py-3 bg-gray-100 rounded-lg 
    border-2 border-transparent hover:border-blue-500 cursor-pointer transition'
    >
      <div className='text-base capitalize font-semibold'>
        <h3 className='mb-2'>Percobaan</h3>
      </div>
      <div className='capitalize'>
        <p className='text-sm line-clamp-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem voluptas quas dolorum quidem. Quisquam, quae. Quisquam
        </p>
      </div>
      <div className='border-t border-blue-300 my-3' />
      <div className='flex'>
        <p className='text-xs text-gray-600'>22 Agustus 2022</p>
        <div className='cursor-pointer ml-auto'>
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  )
}

export default NoteItem
