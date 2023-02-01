import NoteAppHeader from '@/components/NoteAppHeader'
import NoteDetail from '@/components/NoteDetail'
import { useParams } from 'react-router-dom'
import { getNote } from '@/utils/data'

export default function NotePage() {
  const { id } = useParams()
  const note = getNote(id)

  return (
    <section>
      <NoteAppHeader note={note} />
      <NoteDetail note={note} />
    </section>
  )
}
