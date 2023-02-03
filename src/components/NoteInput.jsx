import { useState } from 'react'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

export default function NoteInput({ addNote }) {
  const [isTitleValid, setIsTitleValid] = useState(false)
  const [noteData, setNoteData] = useState({ title: '', body: '' })

  const handleChangeTitle = (event) => {
    if (noteData.title.length > 50) {
      setIsTitleValid(true)
    } else {
      setIsTitleValid(false)
    }

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

    if (noteData.title === '') {
      toast.error('Judul tidak boleh kosong!')
    } else if (noteData.body === '') {
      toast.error('Detail catatan tidak boleh kosong!')
    } else if (noteData.title !== '' && noteData.body !== '' && !isTitleValid) {
      addNote(noteData)
    }
  }

  return (
    <div className="px-4 lg:px-8 pb-8">
      <form className="flex flex-col" onSubmit={handleSubmitNoteData}>
        <div className="flex flex-row mb-2">
          <div className="lg:text-lg font-semibold ">Judul</div>
          {isTitleValid && (
            <div className="text-red-400 ml-2 my-auto text-sm">
              *Tidak boleh lebih dari 50 karakter
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Masukan Judul"
          className="bg-white border text-sm rounded block w-full px-4 py-4"
          value={noteData.title}
          onChange={handleChangeTitle}
        />
        <div className="mt-4 flex flex-row mb-2">
          <div className="lg:text-lg font-semibold ">Detail Catatan</div>
        </div>
        <div
          type="text"
          data-placeholder="Masukan Detail Catatan"
          className="bg-white border min-h-[250px] placeholder:text-black focus:text-primary-dark text-sm rounded focus:ring-primary-blue focus:border-primary-blue block w-full px-4 py-4"
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
