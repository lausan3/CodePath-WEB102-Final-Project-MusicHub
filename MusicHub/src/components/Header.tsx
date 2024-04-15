import { SetStateAction } from "react";

import ThemeButton from "./ThemeButton";
import ShowSidebarButton from "./ShowSidebarButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        className="record"
      />
      <ThemeButton/>
    </header>
  )
}

export default Header