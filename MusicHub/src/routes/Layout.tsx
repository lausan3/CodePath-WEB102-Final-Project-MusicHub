import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "../contexts/theme-context";
import "./../App.css"

import Sidebar from "../components/Sidebar";
import MiniSidebar from "../components/MiniSidebar";
import Header from "../components/Header";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <ThemeProvider>      
      <div className="layout">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <div className="layout-bottom">
          {showSidebar === true ? <Sidebar /> : <MiniSidebar/>}
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout