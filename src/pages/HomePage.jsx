import NoteAppHeader from '@/components/NoteAppHeader'
import NoteList from '@/components/NoteList'
import { getAllNotes, deleteNote } from '@/utils/data'
import { useState } from 'react'

export default function HomePage() {
  const [notes, setNotes] = useState(getAllNotes())

  const handleDeleteNote = (event, id) => {
    event.preventDefault()
    deleteNote(id)
    setNotes(getAllNotes())
  }

  return (
    <section>
      <NoteAppHeader totalNote={notes.length} />
      <NoteList notes={notes} handleDeleteNote={handleDeleteNote} />
    </section>
  )
}
