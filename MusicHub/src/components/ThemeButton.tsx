import { useEffect } from "react";
import { useTheme } from "../contexts/theme-context";
import "./../themes/ThemeButton.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {

}

const ThemeButton = ({}: props) => {
  const [theme] = useTheme();
  
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
    <div
      className="theme-btn"
    >
      {
        theme === 'light' ? 
        <FontAwesomeIcon 
          className="theme-btn-icon sidebar-icon"
          icon="sun"
        />
        :
        <FontAwesomeIcon
          className="theme-btn-icon sidebar-icon" 
          icon="moon"
        />
      }
    </div>
  )
}

export default ThemeButton