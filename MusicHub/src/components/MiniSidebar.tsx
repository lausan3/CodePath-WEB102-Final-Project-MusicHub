import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../themes/MiniSidebar.css'
import ThemeButton from './ThemeButton'

const MiniSidebar = () => {
  return (
    <div className="mini-sidebar">
      <Link className='mini-sidebar-link' to='/'>
        <FontAwesomeIcon icon="house" className='sidebar-icon'/>
      </Link>
      <Link className='mini-sidebar-link' to='/create'>
        <FontAwesomeIcon icon="plus" className='sidebar-icon'/>
      </Link>
      <Link className='mini-sidebar-link' to='/list'>
        <FontAwesomeIcon icon="magnifying-glass" className='sidebar-icon'/>
      </Link>

      <ThemeButton/>
    </div>
  )
}

export default MiniSidebar