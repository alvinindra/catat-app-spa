import LocaleContext from '@/contexts/LocaleContext'
import { HeaderLocale } from '@/locale/page-header-locale'
import PropTypes from 'prop-types'
import { useContext } from 'react'

export default function SearchBox({ searchKeyword, handleSearchKeyPress }) {
  const { locale } = useContext(LocaleContext)

  return (
    <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%]">
      <input
        type="text"
        placeholder={HeaderLocale[locale].search}
        className="bg-white dark:bg-stone-500 dark:placeholder:text-white border outline-blue-400 dark:outline-blue-50 text-sm block w-[300px] rounded-3xl px-4 py-4"
        value={searchKeyword}
        onChange={(event) => handleSearchKeyPress(event.target.value)}
      />
    </div>
  )
}

SearchBox.propTypes = {
  searchKeyword: PropTypes.string,
  handleSearchKeyPress: PropTypes.func,
}
