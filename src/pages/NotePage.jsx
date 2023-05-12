import LayoutAppHeader from '@/components/Layout/LayoutAppHeader'
import NoteDetail from '@/components/NoteDetail'
import { useParams } from 'react-router-dom'
import { getNote } from '@/api/note'
import LayoutNotFound from '@/components/Layout/LayoutNotFound'
import { useEffect, useState } from 'react'
import LoadingSpinner from '@/components/Base/LoadingSpinner'

export default function NotePage() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [note, setNote] = useState(null)

  useEffect(() => {
    const getNotes = async () => {
      await getNote(id).then((res) => {
        setNote(res.data)
        setIsLoading(false)
      })
    }

    getNotes()
  }, [id])

  if (isLoading) {
    return <LoadingSpinner />
  }

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
