// import { SetStateAction } from "react";

// import ShowSidebarButton from "./ShowSidebarButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../themes/Header.css'

interface props {
  // showSidebar: boolean,
  // setShowSidebar: React.Dispatch<SetStateAction<boolean>>,
}

const Header = ({}: props) => {
  

  return (
    <header className="header">
      {/* <ShowSidebarButton onClick={() => setShowSidebar(!showSidebar)}/> */}
      <div className="logo">
        <FontAwesomeIcon 
          icon="record-vinyl" 
          className="header-btn"
          />
        <h2>Music Hub</h2>
      </div>
    </header>
  )
}

export default Header