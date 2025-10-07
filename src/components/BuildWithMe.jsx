import PropTypes from "prop-types"

// eslint-disable-next-line react/prop-types
const BuildWithMe = ({ submit, result }) => {


  return (
    <>
    <div className='form-container m-[10px 20px]  md:mx-auto flex justify-center'>
  
      <form onSubmit={submit} className="md:w-[45%]">
        <div className="grid grid-flow-row gap-1 m-3">
          <label htmlFor="fullname">Full name:</label>
          <input type="text" name='fullname' placeholder='Enter Fullname' value={''} className="md:h-[45px] px-3 text-[#0f112e] rounded-md bg-[#dcebe8]"/>
        </div>
        <div className="grid grid-flow-row gap-1 m-3">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' placeholder='Enter valid Email' value={''} className="md:h-[45px] px-3 text-[#0f112e] rounded-md bg-[#dcebe8]"/>
        </div>
        <div>project category</div>
        <div className=" grid grid-flow-row gap-1 m-3">
          <h3 className="">Briefly describe your project.</h3>
          <textarea name="" id="" placeholder="" className="bg-[#dcebe8] w-full md:h-[150px] rounded-md"></textarea>
        </div>
        
        <div className="flex justify-center">
          <button type="submit" className="bg-[#b87f17e5] py-1 w-[80%] rounded-md">{result ? result : "Send Message"}</button>
        </div>
        
      </form>
    </div>

    
    </>
  )
}

BuildWithMe.propType = {
  submit: PropTypes.bool.isRequired,
  result: PropTypes.bool.isRequired

}

export default BuildWithMe