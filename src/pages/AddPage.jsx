import React from 'react'
import { addNote } from '@/utils/data'
import { useNavigate } from 'react-router-dom'

import NoteInput from '@/components/NoteInput'
import NoteAppHeader from '@/components/NoteAppHeader'

function AddPage () {
  const navigate = useNavigate()

  function onAddNoteHandler (note) {
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

export default AddPage
