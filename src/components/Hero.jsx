import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


const Hero = () => {

  const navigate = useNavigate();

  return (
   <>
    <section className="section flex items-center">
      <AnimatePresence>
      <div className="md:w-[90%] md:mx-auto md:flex justify-between">
        <motion.div
        className="block md:hidden bg-[#B99470] w-70 h-95 mx-auto my-9 rounded-t-2xl rounded-b-[30%] overflow-hidden">
          <img src="./images/developer.png" alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div className="mx-5 flex flex-col justify-center md:w-[60%] gap-5 mb-5">
          <div className=" hidden md:flex items-end w-70 object-contain overflow-hidden">
            {/* <h3 className="pr-1.25 md:text-4xl font-extra">Welcome!</h3> */}
            <img src="/images/jcropped.png" alt="" />
          </div>
          <div className="md:w-[80%]">
           <p className="text-2xl">A Fullstack developer dedicated to designing and building modern scalable applications.</p>
          </div>
          <button onClick={()=> navigate('/define_the_project')} className="bg-[#B99470] w-55 py-3 px-4 rounded-md text-2xl">Work With Me!</button>
          
        </motion.div>  
          
        <div className="hidden md:block md:w-1/3 bg-[#B99470]  object-contain">
          <motion.div
            initial = {{opacity:0, x: 200}}
            exit={{opacity:0, x: 200}}
            animate={{opacity:1, x:0}}
            transition={{duration: 0.9}}

            className="h-full" 
          >
            <img src="./images/developer.png" alt="" className="w-full h-full lg:ml-[-50%]" />
          </motion.div>
        </div>

      </div> 
      </AnimatePresence>
    </section>
   </>
  )
}

export default Hero