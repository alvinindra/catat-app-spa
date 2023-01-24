import NoteAppHeader from '@/components/NoteAppHeader'
import NoteList from '@/components/NoteList'
import { getAllNotes } from '@/utils/data'

export default function HomePage() {
  const listNote = getAllNotes()

  return (
    <section>
      <NoteAppHeader totalNote={listNote.length} />
      <NoteList listNote={listNote} />
    </section>
  )
}
