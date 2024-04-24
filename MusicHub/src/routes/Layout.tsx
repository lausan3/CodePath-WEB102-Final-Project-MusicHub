import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../contexts/theme-context";
import "./../App.css"

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <ThemeProvider>      
      <div className="layout">
        <Header />
        <div className="layout-bottom">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout