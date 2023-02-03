import NoteItem from './NoteItem'
import PropTypes from 'prop-types'

export default function NoteList({
  notes,
  handleDeleteNote,
  handleArchieveNote,
  handleUnArchieveNote,
}) {
  return notes.length ? (
    <div className="px-4 lg:px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          date={note.createdAt}
          archieved={note.archieved}
          handleDeleteNote={handleDeleteNote}
          handleArchieveNote={handleArchieveNote}
          handleUnArchieveNote={handleUnArchieveNote}
        />
      ))}
    </div>
  ) : (
    <div className="p-4 py-8 text-lg bg-gray-100 rounded w-full text-center font-medium">
      Tidak Ada Catatan
    </div>
  )
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  handleDeleteNote: PropTypes.func.isRequired,
  handleArchieveNote: PropTypes.func.isRequired,
  handleUnArchieveNote: PropTypes.func.isRequired,
}
