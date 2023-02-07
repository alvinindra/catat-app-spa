import React from 'react'
import { addNote } from '@/utils/data'
import { useNavigate } from 'react-router-dom'

import NoteInput from '@/components/NoteInput'
import LayoutAppHeader from '@/components/Layout/LayoutAppHeader'

export default function AddPage() {
  const navigate = useNavigate()

  const onAddNoteHandler = (note) => {
    addNote(note)
    navigate('/')
  }

  return (
    <section>
      <LayoutAppHeader />
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
