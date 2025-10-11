import { useNavigate } from "react-router-dom";
import { laki11 } from "../assets/assets";
import { AnimatePresence, motion } from "framer-motion";


const Hero = () => {

  const navigate = useNavigate();

  return (
   <>
    <section className="section flex items-center">
      <AnimatePresence>
      <div className="md:w-[90%] md:mx-auto md:flex justify-between">
        <motion.div
        className="block md:hidden bg-[#B99470] w-[280px] h-[380px] mx-auto my-9 rounded-t-2xl rounded-b-[30%] overflow-hidden">
          <img src={laki11} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div className="mx-5 flex flex-col justify-center md:w-[60%] gap-5 mb-[20px]">
          <div className=" hidden md:flex items-end">
            <h3 className="pr-[5px] md:text-4xl font-extra">Welcome!</h3>
          </div>
          <div className="md:w-[90%]">
           <p className="text-2xl">I&apos;m Ouma Klinsmann, a Full-stack developer dedicated to designing and building modern scalable applications.</p>
          </div>
          <button onClick={()=> navigate('/define_the_project')} className="bg-[#B99470] w-[130px] py-3 rounded-md">Work With Me!</button>
          
        </motion.div>  
          
        <div className="hidden md:block md:w-1/3 bg-[#B99470]">
          <motion.div
            initial = {{opacity:0, x: 200}}
            exit={{opacity:0, x: 200}}
            animate={{opacity:1, x:0}}
            transition={{duration: 0.9}}

            className="h-full" 
          >
            <img src={laki11} alt="" className="w-full h-full object-cover md:ml-[-50%]" />
          </motion.div>
        </div>

      </div> 
      </AnimatePresence>
    </section>
   </>
  )
}

export default Hero