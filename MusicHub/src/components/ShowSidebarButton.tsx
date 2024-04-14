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
      <i 
        className={`burger-menu fa-solid fa-bars ${theme === 'dark' ? 'invert' : ''}`}
      />
    </button>
  )
}

export default ShowSidebarButton