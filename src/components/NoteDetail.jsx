import PropTypes from 'prop-types'
import parser from 'html-react-parser'

export default function NoteDetail({ body }) {
  return <div className="px-4 lg:px-8 pb-8 text-md lg:text-lg">{parser(body)}</div>
}

NoteDetail.propTypes = {
  body: PropTypes.string,
}
