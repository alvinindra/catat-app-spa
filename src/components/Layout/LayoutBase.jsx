import { LocaleProvider } from '@/contexts/LocaleContext'
import PropTypes from 'prop-types'

const LayoutBase = ({ children, localeContextValue }) => {
  return <LocaleProvider value={localeContextValue}>{children}</LocaleProvider>
}

export default LayoutBase

LayoutBase.propTypes = {
  children: PropTypes.element,
  localeContextValue: PropTypes.object,
}
