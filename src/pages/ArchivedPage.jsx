import LoadingSpinner from '@/components/Base/LoadingSpinner'
import LayoutAppHeader from '@/components/Layout/LayoutAppHeader'
import NoteList from '@/components/NoteList'
import { getArchivedNotes, deleteNote, archiveNote, unarchiveNote } from '@/api/note'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ArchivedPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [keywordParams, setKeywordParams] = useSearchParams()
  const [notes, setNotes] = useState()

  const keyword = keywordParams.get('keyword')
  const [searchKeyword, setSearchKeyword] = useState(keyword || '')

  useEffect(() => {
    const getNotes = async () => {
      await getArchivedNotes().then((res) => {
        setNotes(res.data)
        setIsLoading(false)
      })
    }

    getNotes()
  }, [])

  useEffect(() => {
    const searchedNotes = async () => {
      await getArchivedNotes().then((res) => {
        setNotes(() =>
          res.data.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()))
        )
        setIsLoading(false)
      })
    }

    if (searchKeyword.length) searchedNotes()
    else getLatestArchivedNotes()
  }, [searchKeyword])

  const getLatestArchivedNotes = async () => {
    setIsLoading(true)
    await getArchivedNotes().then((res) => {
      setNotes(res.data)
      setIsLoading(false)
    })
  }

  const handleSearchKeyPress = (keyword) => {
    setSearchKeyword(keyword)
    setKeywordParams({ keyword })
  }

  const handleDeleteNote = async (event, id) => {
    event.preventDefault()
    await deleteNote(id)
    await getLatestArchivedNotes()
  }

  const handleArchieveNote = async (event, id) => {
    event.preventDefault()
    await archiveNote(id)
    await getLatestArchivedNotes()
  }

  const handleUnArchieveNote = async (event, id) => {
    event.preventDefault()
    await unarchiveNote(id)
    await getLatestArchivedNotes()
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
