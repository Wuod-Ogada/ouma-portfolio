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
          <div className="m-8" >
            <div className="h-[60vh] flex flex-col justify-between items-center" style={{backgroundImage: `url(${project.image})`, backgroundSize: 'contain', 
    backgroundPosition: 'center', backgroundRepeat: "no-repeat"}}>
              <div >
                <p className="text-2xl md:text-3xl text-center gravitas py-3">{project.title}</p>
              </div>
              <div className="text-center mb-10 bg-[#2addf58e] w-60 md:w-105 mx-auto rounded-md">
                <button type="button" className="text-2xl md:text-3xl">Book for Demo</button>
              </div> 
            </div>
          
          </div>
        )}
      </div>
    </>
  )
}

export default ViewProjectPage