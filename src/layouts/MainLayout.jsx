import { Outlet } from "react-router-dom";

import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <NavHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout