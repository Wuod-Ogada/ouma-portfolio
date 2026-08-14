import { useContext, useState, useEffect } from "react"
import { PortfolioContext } from "../context/PortfolioContext"
import { useParams } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"



const ViewProjectPage = () => {

  const { id } = useParams()
  const { projectData } = useContext(PortfolioContext);

  const [project, setProject] = useState(null);

  const viewedProject = () => {
    const selectedProject = projectData.find(project => project.id === id);
    setProject(selectedProject);
  }

  useEffect(()=>{
    viewedProject();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id,projectData])

  return (
    <>
      <div>
        {project && (
          <div className="m-8" >
            <div className="h-[60vh] flex flex-col justify-between items-center py-3" style={{backgroundImage: `url(${project.image})`, backgroundSize: 'contain', 
    backgroundPosition: 'center', backgroundRepeat: "no-repeat"}}>
              <div >
                <p className="text-2xl md:text-3xl text-center gravitas">{project.title}</p>
              </div>
              <div className="flex flex-col gap-3">
                <button type="button" className="text-center bg-[#2addf58e] w-60 md:w-105 mx-auto rounded-md text-2xl md:text-3xl" ><NavHashLink smooth to="/#Contact_me">Request Demo</NavHashLink></button>

                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-center bg-[#2ab6c98e] w-60 md:w-105 mx-auto rounded-md text-2xl md:text-3xl">Visit</a>
                )}
              </div> 
              
            </div>
          
          </div>
        )}
      </div>
    </>
  )
}

export default ViewProjectPage