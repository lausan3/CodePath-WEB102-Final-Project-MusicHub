import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../contexts/theme-context'

import './../themes/MiniSidebar.css'
import ThemeButton from './ThemeButton'

const MiniSidebar = () => {
  const [, toggleTheme] = useTheme();

  return (
    <div className="mini-sidebar">
      <Link className='mini-sidebar-link' to='/'>
        <FontAwesomeIcon icon="house" className='sidebar-icon'/>
      </Link>
      <Link className='mini-sidebar-link' to='/create'>
        <FontAwesomeIcon icon="plus" className='sidebar-icon'/>
      </Link>
      <Link className='mini-sidebar-link' to='/explore'>
        <FontAwesomeIcon icon="magnifying-glass" className='sidebar-icon'/>
      </Link>

      <a className="mini-sidebar-link mini-sidebar-bottom" onClick={toggleTheme}>
        <ThemeButton/>
      </a>
    </div>
  )
}

export default MiniSidebar