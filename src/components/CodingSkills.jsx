import { codingSkills } from "../assets/assets"

const CodingSkills = () => {
  return (
    <>
    <div>
      <ul className="md:w-[90%] ">
      {codingSkills.map((codingskill, index) => (
            
              <li key={index} className="m-3">
                <img src={codingskill.image} alt={codingskill.skill} width={43} />
              </li>
            
          ))}
          </ul>
    </div>
    </>
  )
}

export default CodingSkills