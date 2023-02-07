import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function LayoutNotFound({ title }) {
  return (
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-blue-400">404</h2>
        <p className="text-2xl font-semibold md:text-3xl mb-12">
          Maaf, {title} ini tidak ditemukan.
        </p>
        <Link
          rel="noopener noreferrer"
          to="/"
          className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 font-semibold rounded "
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

LayoutNotFound.propTypes = {
  title: PropTypes.string.isRequired,
}
