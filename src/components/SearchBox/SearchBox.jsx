import PropTypes from 'prop-types'

export default function SearchBox({ keyword, handleChangeKeyword }) {
  return (
    <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%]">
      <input
        type="text"
        placeholder="Cari catatan disini"
        className="bg-white border outline-blue-400 text-sm block w-[350px] rounded-3xl px-4 py-4"
        value={keyword}
        onChange={(event) => handleChangeKeyword(event.target.value)}
      />
    </div>
  )
}

SearchBox.propTypes = {
  keyword: PropTypes.string,
  handleChangeKeyword: PropTypes.func.isRequired,
}
