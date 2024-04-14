import { useEffect, useState } from "react";
import { useTheme } from "../contexts/theme-context";
import "./../themes/ThemeButton.css"

interface props {

}

const ThemeButton = ({}: props) => {
  const [theme, toggleTheme] = useTheme();
  const [invert, setInvert] = useState('invert');
  
  const invertIcons = () => {
    // const root = document.documentElement;
    // console.log(root.childNodes[2].childNodes[1].childNodes);
    
    const icons = document.querySelectorAll('.fa-solid');
    console.log(icons);
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

    setInvert(invert === 'invert' ? '' : 'invert')
  }, [theme]);
  
  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
    <i className={`theme-btn-icon fa-solid fa-sun ${invert}`}/>
    {
      theme === 'light' ? 
      <i className={`theme-btn-icon fa-solid fa-sun ${invert}`}/>
      :
      <i className={`theme-btn-icon fa-solid fa-moon ${invert}`}/>
    }
    </button>
  )
}

export default ThemeButton