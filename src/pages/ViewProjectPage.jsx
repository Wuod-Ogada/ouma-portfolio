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
              <p className="text-2xl md:text-3xl">{project.title}</p>
              <div>objective</div>
            </div>
            
            <div>
              {project.description.map((para, i)=>(
                <p key={i} className="text-xl mb-1.5">
                  {para}
                </p>
              ))}
            </div> 
          
          </div>
        )}
      </div>
    </>
  )
}

export default ViewProjectPage