import { useEffect } from "react";
import { useTheme } from "../contexts/theme-context";
import "./../themes/ThemeButton.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {

}

const ThemeButton = ({}: props) => {
  const [theme, toggleTheme] = useTheme();
  
  const invertIcons = () => {
    const icons = document.querySelectorAll('.fa-solid');

    icons.forEach(icon => {
      console.log(icon);
      icon.classList.add('invert');
    });
  };
  
  useEffect(() => {
    document.documentElement.className = theme;
    
    if (theme == 'dark') {
      invertIcons();
    }
  }, [theme]);
  
  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {
        theme === 'light' ? 
        <FontAwesomeIcon 
          className="theme-btn-icon"
          icon="sun"
        />
        :
        <FontAwesomeIcon
          className="theme-btn-icon" 
          icon="moon"
        />
      }
    </button>
  )
}

export default ThemeButton