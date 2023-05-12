import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import LocaleContext from '@/contexts/LocaleContext'
import { AddPageLocale } from '@/locale/page-add-locale'

export default function NoteInput({ addNote }) {
  const { locale } = useContext(LocaleContext)
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
          <div className="lg:text-lg font-semibold dark:text-white">
            {AddPageLocale[locale].title}
          </div>
          {isTitleValid && (
            <div className="text-red-400 ml-2 my-auto text-sm">
              *Tidak boleh lebih dari 50 karakter
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder={AddPageLocale[locale].placeholderTitle}
          className="bg-white dark:bg-stone-500 border outline-blue-400 dark:outline-blue-50 text-sm rounded block w-full px-4 py-4"
          value={noteData.title}
          onChange={handleChangeTitle}
        />
        <div className="mt-4 flex flex-row mb-2">
          <div className="lg:text-lg font-semibold dark:text-white">
            {AddPageLocale[locale].detailNote}
          </div>
        </div>
        <div
          type="text"
          data-placeholder={AddPageLocale[locale].placeholderDetailNote}
          className="bg-white border dark:bg-stone-500 dark:placeholder:text-white outline-blue-400 dark:outline-blue-50 min-h-[250px] focus:text-primary-dark text-sm rounded focus:ring-primary-blue focus:border-primary-blue block w-full px-4 py-4"
          value={noteData.body}
          onInput={handleChangeBody}
          contentEditable
        />
        <button
          className="mt-5 bg-blue-400 p-2 ml-auto font-semibold text-white rounded w-48"
          type="submit"
          onClick={handleSubmitNoteData}
        >
          {AddPageLocale[locale].submit}
        </button>
      </form>
    </div>
  )
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}
