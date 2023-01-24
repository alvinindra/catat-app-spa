import NoteItem from './NoteItem'
import PropTypes from 'prop-types'

function NoteList({ listNote }) {
  return listNote ? (
    <div className="px-4 lg:px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {listNote.map((note) => (
        <NoteItem key={note.id} title={note.title} body={note.body} date={note.createdAt} />
      ))}
    </div>
  ) : (
    <div className="p-4 border-blue-400 border-2 rounded w-full">Tidak Ada Catatan</div>
  )
}

NoteList.propTypes = {
  listNote: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList
