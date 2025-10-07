 import { NavLink, useNavigate } from "react-router-dom";
import { projectData } from "../assets/assets";

const Projects = () => {

const navigate = useNavigate();

  return (
    <>
    <section className="flex flex-col md:h-[80vh] justify-center">
      <div>
        <h2 className="text-center md:text-2xl">Projects</h2>
      </div>
      <div className="md:flex gap-5 w-[90%] mx-auto" id="Projects">
        {projectData.map((project, index) => (
          <div key={index} className="py-5">
            <div className="">
              <img src={project.image} alt={project.title} className="h-[280px]" />
            </div>
            <div className="bg-[#B99470] rounded-b-md p-3">
              <div className="text-xl text-[#0b1618]"><h2>{project.title}</h2></div>
              <div className="text-md md:text-lg"><h2>{project.intro}</h2></div>
              <div onClick={()=>{navigate(`/project/${project.id}`)}} className="">
                <NavLink  className="bg-[#1E201E] px-4 py-[5px] rounded-md">Read More</NavLink>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </section>
    </>
  )
}

export default Projects