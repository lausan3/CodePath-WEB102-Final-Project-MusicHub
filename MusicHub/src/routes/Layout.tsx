import { Link, Outlet } from "react-router-dom";

import TopNav from "../components/TopNav";

const Layout = () => {

  return (
    <div className="layout">
      <TopNav />
      <Outlet />
    </div>
  )
}

export default Layout