import { codingSkills } from "../assets/assets"

const CodingSkills = () => {
  return (
    <>
      <div className="w-[90%] grid grid-cols-3 ">
      {codingSkills.map((codingskill, index) => (
            
              <div key={index} className="m-3">
                <img src={codingskill.image} alt={codingskill.skill} width={43} />
              </div>
            
          ))}
          </div>
    </>
  )
}

export default CodingSkills