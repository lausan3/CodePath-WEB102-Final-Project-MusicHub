import { Link } from 'react-router-dom'
import './../themes/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
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
    </div>
  )
}

export default Sidebar