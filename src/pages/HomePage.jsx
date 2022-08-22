import NoteList from '../components/NoteList'

export default function HomePage () {
  return (
    <div className='md:max-w-3xl lg:max-w-5xl mx-auto'>
      <div className='bg-gray-100 px-8 py-12 rounded-b-lg mb-8 text-left'>
        <h1 className='text-3xl text-blue-400 font-bold mb-2'>Catatan</h1>
        <p className='text-sm font-medium text-gray-600'>
          Total 7 catatan yang telah dibuat
        </p>
      </div>
      <NoteList />
    </div>
  )
}
