import React from 'react'
import PropTypes from 'prop-types'

class NoteInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    return (
      <div className="px-4 lg:px-8 pb-8">
        <form className="flex flex-col" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Masukan Judul"
            className="bg-white border text-sm rounded block w-full px-4 py-4"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <div
            type="text"
            data-placeholder="Masukan Detail Catatan"
            className="mt-4 bg-white border min-h-[250px] placeholder:text-black focus:text-primary-dark text-sm rounded focus:ring-primary-blue focus:border-primary-blue block w-full px-4 py-4"
            value={this.state.body}
            onInput={this.onBodyChangeEventHandler}
            contentEditable
          />
          <button
            className="mt-5 bg-blue-400 p-2 ml-auto font-semibold text-white rounded w-48"
            type="submit"
            onClick={this.onSubmitEventHandler}
          >
            Tambah
          </button>
        </form>
      </div>
    )
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput
