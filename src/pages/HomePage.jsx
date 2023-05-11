import LayoutAppHeader from '@/components/Layout/LayoutAppHeader'
import NoteList from '@/components/NoteList'
import { deleteNote, archiveNote, unarchiveNote, getActiveNotes } from '@/api/note'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import LoadingSpinner from '@/components/Base/LoadingSpinner'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [keywordParams, setKeywordParams] = useSearchParams()
  const [notes, setNotes] = useState([])

  const keyword = keywordParams.get('keyword')
  const [searchKeyword, setSearchKeyword] = useState(keyword || '')

  useEffect(() => {
    const getNotes = async () => {
      await getActiveNotes().then((res) => {
        setNotes(res.data)
        setIsLoading(false)
      })
    }

    getNotes()
  }, [])

  useEffect(() => {
    const searchedNotes = async () => {
      await getActiveNotes().then((res) => {
        setNotes(() =>
          res.data.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()))
        )
        setIsLoading(false)
      })
    }

    if (searchKeyword.length) searchedNotes()
  }, [searchKeyword])

  const getLatestNotes = async () => {
    await getActiveNotes().then((res) => {
      setNotes(res.data)
    })
  }

  const handleSearchKeyPress = (keyword) => {
    setSearchKeyword(keyword)
    setKeywordParams({ keyword })
  }

  const handleDeleteNote = async (event, id) => {
    event.preventDefault()
    await deleteNote(id)
    await getLatestNotes()
  }

  const handleArchieveNote = async (event, id) => {
    event.preventDefault()
    await archiveNote(id)
    await getLatestNotes()
  }

  const handleUnArchieveNote = async (event, id) => {
    event.preventDefault()
    await unarchiveNote(id)
    await getLatestNotes()
  }

  return (
    <section>
      <LayoutAppHeader
        totalNote={notes?.length}
        handleSearchKeyPress={handleSearchKeyPress}
        searchKeyword={searchKeyword}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <NoteList
          notes={notes}
          isLoading={isLoading}
          handleDeleteNote={handleDeleteNote}
          handleArchieveNote={handleArchieveNote}
          handleUnArchieveNote={handleUnArchieveNote}
        />
      )}
    </section>
  )
}
