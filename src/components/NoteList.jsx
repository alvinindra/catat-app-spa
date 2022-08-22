import NoteItem from './NoteItem'

function NoteList () {
  return (
    <div
      className='px-4 lg:px-8 pb-8 grid grid-cols-1 
    sm:grid-cols-2 md:grid-cols-3 gap-4'
    >
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  )
}

export default NoteList
