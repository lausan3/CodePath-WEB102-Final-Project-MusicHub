import { SetStateAction } from "react";

import ShowSidebarButton from "./ShowSidebarButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../themes/Header.css'

interface props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>,
}

const Header = ({showSidebar, setShowSidebar}: props) => {
  

  return (
    <header className="header">
      <ShowSidebarButton onClick={() => setShowSidebar(!showSidebar)}/>
      <FontAwesomeIcon 
        icon="record-vinyl" 
        className="header-btn"
        />
      <h2>Music Hub</h2>
    </header>
  )
}

export default Header