import { useState, useEffect } from "react";

const TopNav = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="topnav">
      <button
        onClick={toggleTheme}
      >
        Theme
      </button>
    </div>
  )
}

export default TopNav