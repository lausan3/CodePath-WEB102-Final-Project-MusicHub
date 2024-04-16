import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../themes/MiniSidebar.css'

const MiniSidebar = () => {
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
    </div>
  )
}

export default MiniSidebar