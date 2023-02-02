import { useState } from 'react'
import PropTypes from 'prop-types'

export default function NoteInput({ addNote }) {
  const [noteData, setNoteData] = useState({ title: '', body: '' })

  const handleChangeTitle = (event) => {
    setNoteData({
      ...noteData,
      title: event.target.value,
    })
  }

  const handleChangeBody = (event) => {
    setNoteData({
      ...noteData,
      body: event.target.innerHTML,
    })
  }

  const handleSubmitNoteData = (event) => {
    event.preventDefault()
    addNote(noteData)
  }

  return (
    <div className="px-4 lg:px-8 pb-8">
      <form className="flex flex-col" onSubmit={handleSubmitNoteData}>
        <input
          type="text"
          placeholder="Masukan Judul"
          className="bg-white border text-sm rounded block w-full px-4 py-4"
          value={noteData.title}
          onChange={handleChangeTitle}
        />
        <div
          type="text"
          data-placeholder="Masukan Detail Catatan"
          className="mt-4 bg-white border min-h-[250px] placeholder:text-black focus:text-primary-dark text-sm rounded focus:ring-primary-blue focus:border-primary-blue block w-full px-4 py-4"
          value={noteData.body}
          onInput={handleChangeBody}
          contentEditable
        />
        <button
          className="mt-5 bg-blue-400 p-2 ml-auto font-semibold text-white rounded w-48"
          type="submit"
          onClick={handleSubmitNoteData}
        >
          Tambah
        </button>
      </form>
    </div>
  )
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}
