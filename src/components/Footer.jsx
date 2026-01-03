import { logo } from '../assets/assets'
import { NavHashLink } from 'react-router-hash-link'
import {  NavLink, useNavigate } from 'react-router-dom'


const Footer = () => {

const navigate = useNavigate();

  return (
    <>
    <div className='bg-[#DDA853] mt-5 py-5 '>

      <div className=' mx-5 md:w-[90%] md:flex md:justify-between md:mx-auto md:items-center text-lg font-medium'>
        <div className='mb-5'>
          <ul className='text-[#0f2542]'>
            <li><NavLink onClick={() => window.scrollTo(0, 0)} to="/#Header">Home</NavLink></li>
            <li><NavHashLink smooth to="/#About">About</NavHashLink></li>
            <li><NavLink to="/work_experience" onClick={() => window.scrollTo(0, 0)} >Work Experience</NavLink></li>
          </ul>

          <button onClick={()=> navigate('/define_the_project')} className='mt-3 bg-[#634e2ebe] px-3 rounded-md text-[#081629f3]'>Work With Me</button>
        </div>

        <div className='md:text-center mb-5 text-[#0f2542]'>
          <p>Web development & architecture</p>
          <p>&copy; <span>2025</span></p>
        </div>

        <div className='mb-5'>
          <img src={logo} className='w-14 md:w-16' alt="logo" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer