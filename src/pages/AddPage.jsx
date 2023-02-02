import React from 'react'
import { addNote } from '@/utils/data'
import { useNavigate } from 'react-router-dom'

import NoteInput from '@/components/NoteInput'
import NoteAppHeader from '@/components/NoteAppHeader'

export default function AddPage() {
  const navigate = useNavigate()

  const onAddNoteHandler = (note) => {
    addNote(note)
    navigate('/')
  }

  return (
    <section>
      <NoteAppHeader />
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
