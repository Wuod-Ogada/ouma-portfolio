import { NavLink } from "react-router-dom"
import CodingSkills from "./CodingSkills"

const About = () => {

   
  return (
    <>
    <section className="section py-10">
    <div className="md:w-3/4 mx-auto" id="About">
      <div className="">
        <h2 className="text-center text-2xl md:text-3xl  ">About Me</h2>
      </div>
      <div className="md:flex bg-[#1E201E] w-full">
        <div className="items-center  bg-[#B99470] p-4 md:w-[30%]">
          <div>
            <h3 className="text-[#04060f] text-center my-4 text-xl font-subheading">SKILLS</h3>
          </div>
          <div className="md:w-[210px] flex justify-center">
            <CodingSkills />
          </div>
        </div>

        <div className="mx-8 py-5 md:py-8">
          <div className="my-4">
            <p className="text-md md:text-xl">
            I am an entry-level developer with a background in IT Technical Support. The urge to enhance people&apos;s lives through technology motivates me to pursue knowledge and enhance my skills programming. I aspire to innovate systems that are user-friendly and efficient. I am currently developing systems using Javascript, NodeJS utilizing the ExpressJS framework, MySQL, and ReactJS for the frontend.
            </p>
          </div>
          <div className="text-center md:text-end pt-4">
            <NavLink to="/work_experience" onClick={()=> window.scrollTo(0,0)} className="bg-[#B99470] px-[15px] py-3 rounded-md font-subheading">Work Experience</NavLink>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default About