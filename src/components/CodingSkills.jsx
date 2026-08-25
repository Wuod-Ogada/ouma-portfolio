import { codingSkills } from "../assets/assets"

const CodingSkills = () => {
  return (
    <>
      <div className="grid grid-cols-3 md:flex gap-4 md:gap-6 py-4">
      {codingSkills.map((codingskill, index) => (
            
              <div key={index} className="w-18 h-16 object-contain flex items-center justify-center bg-[#e4e7c0f5] rounded-md p-3 shadow-lg">
                <img src={codingskill.image} alt={codingskill.skill} className=""/>
              </div>
            
          ))}
      </div>
    </>
  )
}

export default CodingSkills