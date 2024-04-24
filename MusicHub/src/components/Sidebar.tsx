import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../contexts/theme-context'

import './../themes/Sidebar.css'
import ThemeButton from './ThemeButton'



const Sidebar = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="sidebar">
      <Link className='sidebar-link' to='/'>
        <FontAwesomeIcon icon="house" className='sidebar-icon'/>
        <span className='sidebar-link-text fade-in'>Home</span>
      </Link>
      <Link className='sidebar-link' to='/create'>
        <FontAwesomeIcon icon="plus" className='sidebar-icon'/>
        <span className='sidebar-link-text fade-in'>Post</span>
      </Link>
      <Link className='sidebar-link' to='/explore'>
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