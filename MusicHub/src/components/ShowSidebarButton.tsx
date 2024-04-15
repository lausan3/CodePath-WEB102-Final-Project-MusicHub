import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  onClick: () => void
}

const ShowSidebarButton = ({onClick}: props) => {
  return (
    <button
      className="sidebar-btn"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon="bars"
        className="header-btn"
      />
    </button>
  )
}

export default ShowSidebarButton