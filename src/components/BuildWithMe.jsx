import PropTypes from "prop-types"

// eslint-disable-next-line react/prop-types
const BuildWithMe = ({ submit, result }) => {


  return (
    <>
    <div className='md:m-[10px 20px]  md:mx-auto flex justify-center text-xl md:text-2xl'>
  
      <form onSubmit={submit} className="w-[90%] flex flex-col gap-4">
        <div className="grid grid-flow-row gap-1 ">
          <input type="text" name='fullname' placeholder='Enter Name'  className="h-[40px] px-3 text-[#0f112e] rounded-md bg-[#dcebe8] border-none"/>
        </div>
        <div className="grid grid-flow-row gap-1 ">
          <input type="email" name='email' placeholder='Enter valid Email'  className="h-[40px] px-3 text-[#0f112e] rounded-md bg-[#dcebe8] border-none"/>
        </div>
        
        <div className=" grid grid-flow-row gap-1 ">
          <h3 className="">Briefly describe your project.</h3>
          <textarea name="description"  placeholder="" className="bg-[#dcebe8] text-[#0f112e] px-3 h-[128px]  rounded-md"></textarea>
        </div>
        
        <div className="flex justify-center">
          <button type="submit" className="text-xl md:text-2xl bg-[#b87f17e5] py-1 w-[80%] rounded-md">{result ? result : "Send Message"}</button>
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