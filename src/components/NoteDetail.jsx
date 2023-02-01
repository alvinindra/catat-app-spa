import PropTypes from 'prop-types'
import parser from 'html-react-parser'

function NoteDetail({ note }) {
  return <div className="px-4 lg:px-8 pb-8 text-md lg:text-lg">{parser(note.body)}</div>
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
}

export default NoteDetail
