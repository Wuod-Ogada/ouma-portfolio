import { experiences } from "../assets/assets"

const Experience = () => {
  return (

    <section className="mx-5">
      <div className="md:w-[90%] flex flex-col items-center mx-auto">
        <div>
          <h1 className=" text-center mb-5 text-3xl font-heading">Work Experience</h1>
        </div>
        <div className="flex flex-col gap-7">
          {experiences.map((exp, index) => (
            <div key={index} className="">
              <div className="flex justify-between bg-[#bb9e61e1] py-3 px-5 rounded-t-md">{/*  job title */}
                <div >
                  <h2 className="text-xl font-extra">{exp.title}</h2>
                </div>
                <div className="text-end font-extra">
                 <div>{exp.organization}</div> 
                  <div>{exp.location}</div>
                  <div>{exp.duration}</div>
                </div>
              </div>
              <div className="bg-[#36393d] w-full"> {/*B6CBBD #36393d*/}
                <div className="w-[90%] mx-auto pb-5 py-3">
                  <h3 className="text-center text-[#ebecf0] text-lg font-semibold">SKILLS</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 font-extra">
                    {exp.skills.map((skill, index) => (
                      <li key={index}>&bull; {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-[#997C70]">
                <ul className="p-5 text-md">
                  {exp.roles.map((role, index) => (
                    <li key={index} className="pb-3" >&bull; {role}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
  )
}

export default Experience