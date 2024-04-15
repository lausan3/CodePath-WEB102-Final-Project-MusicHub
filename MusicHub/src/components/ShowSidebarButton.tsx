import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../contexts/theme-context";

interface props {
  onClick: () => void
}

const ShowSidebarButton = ({onClick}: props) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      className="sidebar-btn"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon="bars"
        className={`burger-menu ${theme === 'light' ? 'invert' : ''}`}
      />
    </button>
  )
}

export default ShowSidebarButton