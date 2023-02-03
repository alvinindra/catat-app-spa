import NoteAppHeader from '@/components/NoteAppHeader'
import NoteList from '@/components/NoteList'
import { deleteNote, archiveNote, unarchiveNote, getActiveNotes } from '@/utils/data'
import { useState } from 'react'

export default function HomePage() {
  const [notes, setNotes] = useState(getActiveNotes())

  const handleDeleteNote = (event, id) => {
    event.preventDefault()
    deleteNote(id)
    setNotes(getActiveNotes())
  }

  const handleArchieveNote = (event, id) => {
    event.preventDefault()
    archiveNote(id)
    setNotes(getActiveNotes())
  }

  const handleUnArchieveNote = (event, id) => {
    event.preventDefault()
    unarchiveNote(id)
    setNotes(getActiveNotes())
  }

  const handleChangeKeyword = (keyword) => {
    if (keyword.length) {
      setNotes(notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase())))
    } else {
      setNotes(getActiveNotes())
    }
  }

  return (
    <section>
      <NoteAppHeader totalNote={notes.length} handleChangeKeyword={handleChangeKeyword} />
      <NoteList
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleArchieveNote={handleArchieveNote}
        handleUnArchieveNote={handleUnArchieveNote}
      />
    </section>
  )
}
