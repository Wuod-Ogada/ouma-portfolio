import { codingSkills } from "../assets/assets"

const CodingSkills = () => {
  return (
    <>
      <div className="grid grid-cols-3 md:flex  ">
      {codingSkills.map((codingskill, index) => (
            
              <div key={index} className="m-3 w-12 h-14 object-contain ">
                <img src={codingskill.image} alt={codingskill.skill} className="w-full h-full"/>
              </div>
            
          ))}
          </div>
    </>
  )
}

export default CodingSkills