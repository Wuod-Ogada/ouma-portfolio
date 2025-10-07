import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";
import {logo} from '../assets/assets';
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => { 

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="" id="Home">

        <div className="flex justify-between items-center w-full mx-auto">
          <NavLink to="/">
            <img src={logo} alt="" className="w-16" />
          </NavLink>

          <nav className="hidden text-xl md:flex gap-8 items-center">
            <ul className=" md:flex gap-4 ">
              <li><NavHashLink smooth to="/#About">About</NavHashLink></li>
              <li><NavLink to="/work_experience">Work Experience</NavLink></li>
              <li><NavHashLink smooth to="/#Projects">Projects</NavHashLink></li>
            </ul>
              <button className="bg-[#997C70] px-3 py-2 rounded-md"><NavHashLink smooth to="/#Contact_me">Contact Me!</NavHashLink></button>
          </nav>
          <FaBarsStaggered className="rotate-180 w-7 block md:hidden" onClick={()=> setOpenMenu(!openMenu)}/>   
        </div>
       
        {/* Mobile Responsive Menu */}
          <ResponsiveMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
          
      </div>


    </>
  )
}

export default Navbar