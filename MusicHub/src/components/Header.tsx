import { SetStateAction } from "react";

import ThemeButton from "./ThemeButton";
import ShowSidebarButton from "./ShowSidebarButton";

interface props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>,
}

const Header = ({showSidebar, setShowSidebar}: props) => {
  

  return (
    <header className="header">
      <ShowSidebarButton onClick={() => setShowSidebar(!showSidebar)}/>
      <i className="record fa-solid fa-record-vinyl"></i>
      <ThemeButton/>
    </header>
  )
}

export default Header