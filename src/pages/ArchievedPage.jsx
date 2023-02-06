import NoteAppHeader from '@/components/NoteAppHeader'
import NoteList from '@/components/NoteList'
import { getArchievedNotes, deleteNote, archiveNote, unarchiveNote } from '@/utils/data'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ArchievedPage() {
  const [keywordParams, setKeywordParams] = useSearchParams()
  const [notes, setNotes] = useState(getArchievedNotes())
  const keyword = keywordParams.get('keyword')
  const [searchKeyword, setSearchKeyword] = useState(keyword || '')

  const handleSearchKeyPress = (keyword) => {
    setSearchKeyword(keyword)
    setKeywordParams({ keyword })
  }

  const handleDeleteNote = (event, id) => {
    event.preventDefault()
    deleteNote(id)
    setNotes(getArchievedNotes())
  }

  const handleArchieveNote = (event, id) => {
    event.preventDefault()
    archiveNote(id)
    setNotes(getArchievedNotes())
  }

  const handleUnArchieveNote = (event, id) => {
    event.preventDefault()
    unarchiveNote(id)
    setNotes(getArchievedNotes())
  }

  useEffect(() => {
    if (searchKeyword.length) {
      setNotes(
        notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()))
      )
    } else {
      setNotes(getArchievedNotes())
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
