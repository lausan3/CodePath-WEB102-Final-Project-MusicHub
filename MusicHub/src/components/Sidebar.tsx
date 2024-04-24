import { Link, useMatch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../contexts/theme-context'

import './../themes/Sidebar.css'
import ThemeButton from './ThemeButton'

const Sidebar = () => {
  const [theme, toggleTheme] = useTheme();

  const match = useMatch("/:page")?.params;

  return (
    <div className="sidebar">
      <Link className={`sidebar-link ${match?.page === undefined ? 'active' : ''}`} to='/'>
        <FontAwesomeIcon icon="house" className='sidebar-icon'/>
        <span className='sidebar-link-text fade-in'>Home</span>
      </Link>
      <Link className={`sidebar-link ${match?.page === 'create' ? 'active' : ''}`} to='/create'>
        <FontAwesomeIcon icon="plus" className='sidebar-icon'/>
        <span className='sidebar-link-text fade-in'>Post</span>
      </Link>
      <Link className={`sidebar-link ${match?.page === 'explore' ? 'active' : ''}`} to='/explore'>
        <FontAwesomeIcon icon="magnifying-glass" className='sidebar-icon'/>
        <span className='sidebar-link-text fade-in'>Explore</span>
      </Link>

      <a className="sidebar-link" onClick={toggleTheme}>
        <ThemeButton/>
        <span className='sidebar-link-text fade-in'>{theme == "dark" ? "Dark Mode" : "Light Mode"}</span>
      </a>
    </div>
  )
}

export default Sidebar