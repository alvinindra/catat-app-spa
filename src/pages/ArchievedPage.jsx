import NoteAppHeader from '@/components/NoteAppHeader'
import NoteList from '@/components/NoteList'
import { getArchievedNotes, deleteNote, archiveNote, unarchiveNote } from '@/utils/data'
import { useState } from 'react'

export default function ArchievedPage() {
  const [notes, setNotes] = useState(getArchievedNotes())

  const handleDeleteNote = (event, id) => {
    event.preventDefault()
    deleteNote(id)
    setNotes(getArchievedNotes())
  }

  const handleArchieveNote = (event, id) => {
    event.preventDefault()
    archiveNote(id)
    setNotes(getArchievedNotes())
  }

  const handleUnArchieveNote = (event, id) => {
    event.preventDefault()
    unarchiveNote(id)
    setNotes(getArchievedNotes())
  }

  return (
    <section>
      <NoteAppHeader totalNote={notes.length} />
      <NoteList
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleArchieveNote={handleArchieveNote}
        handleUnArchieveNote={handleUnArchieveNote}
      />
    </section>
  )
}