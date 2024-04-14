import { Outlet } from "react-router-dom";

import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <TopNav />
      <div className="layout">
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout