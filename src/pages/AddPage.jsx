import { addNote } from '@/api/note'
import { useNavigate } from 'react-router-dom'

import NoteInput from '@/components/NoteInput'
import LayoutAppHeader from '@/components/Layout/LayoutAppHeader'
import { toast } from 'react-toastify'

export default function AddPage() {
  const navigate = useNavigate()

  const onAddNoteHandler = async (note) => {
    try {
      await addNote(note)
      toast.success('Berhasil membuat catatan!')
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section>
      <LayoutAppHeader />
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
