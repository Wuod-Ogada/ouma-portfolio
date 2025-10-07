import { useContext, useState, useEffect } from "react"
import { PortfolioContext } from "../context/PortfolioContext"
import { useParams } from "react-router-dom"



const ViewProjectPage = () => {

  const { id } = useParams()
  const { projectData } = useContext(PortfolioContext)

  const [project, setProject] = useState(null)

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
          <div className="m-8">
            <div>Project Hero Section</div>
            <div>
              <p className="text-xl md:text-2xl">{project.title}</p>
              <div>objective</div>
            </div>
            
            <div>
              <div>Project Scope</div>
              <p>{project.description}</p>
            </div>
            <div>
              Project documentation
            </div>
          
          </div>
        )}
      </div>
    </>
  )
}

export default ViewProjectPage