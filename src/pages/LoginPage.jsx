import PropTypes from 'prop-types'
import AuthContainer from '@/components/Auth/AuthContainer'

export default function LoginPage({ onLoginSuccess }) {
  return <AuthContainer isLoginDisplay={true} onLoginSuccess={onLoginSuccess} />
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func,
}
