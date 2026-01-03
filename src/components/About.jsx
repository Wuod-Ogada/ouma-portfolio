import { NavLink } from "react-router-dom"
import CodingSkills from "./CodingSkills"

const About = () => {

   
  return (
    <>
    <section className="section py-10">
    <div className="md:w-3/4 mx-auto" id="About">
      <div className="">
        <h2 className="text-center text-3xl md:text-3xl  my-6">About Me</h2>
      </div>
      <div className=" bg-[#1E201E] w-full">
        <div className="items-center  bg-[#B99470] p-4">
        
          <div className="md:flex justify-center">
            <CodingSkills />
          </div>
        </div>

        <div className="mx-8 py-5 md:py-8">
          <div className="my-4">
            <p className="text-2xl md:text-3xl">
            An ambitious and objective-driven individual motivated by the desire to enhance people&apos;s lives through technology. I am passionate about developing solutions, writing clean code, and learning new technologies. I develop small projects using ReactJS and NodeJS while I learn Java for scalable applications.
            </p>
          </div>
          <div className="text-center md:text-end pt-4">
            <NavLink to="/work_experience" onClick={()=> window.scrollTo(0,0)} className="bg-[#B99470] px-[15px] py-3 rounded-md font-subheading text-2xl">Work Experience</NavLink>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default About