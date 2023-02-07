import LayoutAppHeader from '@/components/Layout/LayoutAppHeader'
import NoteDetail from '@/components/NoteDetail'
import { useParams } from 'react-router-dom'
import { getNote } from '@/utils/data'
import LayoutNotFound from '@/components/Layout/LayoutNotFound'

export default function NotePage() {
  const { id } = useParams()
  const note = getNote(id)

  return (
    <section>
      {note ? (
        <>
          <LayoutAppHeader note={note} />
          <NoteDetail body={note.body} />
        </>
      ) : (
        <LayoutNotFound title="catatan" />
      )}
    </section>
  )
}
