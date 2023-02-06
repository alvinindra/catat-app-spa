import NoteAppHeader from '@/components/NoteAppHeader'
import NoteList from '@/components/NoteList'
import { deleteNote, archiveNote, unarchiveNote, getActiveNotes } from '@/utils/data'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function HomePage() {
  const [keywordParams, setKeywordParams] = useSearchParams()
  const [notes, setNotes] = useState(getActiveNotes())
  const keyword = keywordParams.get('keyword')
  const [searchKeyword, setSearchKeyword] = useState(keyword || '')

  const handleSearchKeyPress = (keyword) => {
    setSearchKeyword(keyword)
    setKeywordParams({ keyword })
  }

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

  useEffect(() => {
    if (searchKeyword.length) {
      setNotes(
        notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()))
      )
    } else {
      setNotes(getActiveNotes())
    }
  }, [searchKeyword])

  return (
    <section>
      <NoteAppHeader
        totalNote={notes.length}
        handleSearchKeyPress={handleSearchKeyPress}
        searchKeyword={searchKeyword}
      />
      <NoteList
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleArchieveNote={handleArchieveNote}
        handleUnArchieveNote={handleUnArchieveNote}
      />
    </section>
  )
}
