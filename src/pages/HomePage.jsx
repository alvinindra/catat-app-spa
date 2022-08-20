import { Link } from 'react-router-dom'
import Counter from '@/components/Counter'

export default function HomePage () {
  return (
    <div className='App'>
      <div>
        <h1>HomePage</h1>
      </div>
      <Link to='/note'>Note Page</Link>
      <Counter />
    </div>
  )
}
