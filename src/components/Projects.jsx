 import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";


const Projects = () => {

const { projectData } = useContext(PortfolioContext);
  
const navigate = useNavigate();

  return (
    <>
    <section className="flex flex-col justify-center">
      <div>
        <h2 className="text-center text-3xl md:text-3xl my-5 playfair">Projects</h2>
      </div>
      <div className="flex-col gap-5 w-[90%] mx-auto" id="Projects">
        {projectData.map((project, index) => (
          <div key={index} className="md:flex py-5">
            
            <div className="bg-[#B99470] rounded-b-md p-3 md:w-[60%] flex flex-col gap-5">
              <div className="text-2xl md:text-3xl text-[#0b1618] garamond font-semibold"><h2>{project.title}</h2></div>
              <div className="text-xl md:text-2xl"><h2>{project.intro}</h2></div>
              <div onClick={()=>{navigate(`/project/${project.id}`)}} className="">
                <NavLink  className="bg-[#1E201E] px-4 py-1.25 rounded-md text-xl" onClick={()=>window.scrollTo(0,0)}>Read More</NavLink>
              </div>
            </div>
            <div className="">
              <img src={project.image} alt={project.title} className="h-70" />
            </div>
          </div>
          
        ))}
      </div>
    </section>
    </>
  )
}

export default Projects