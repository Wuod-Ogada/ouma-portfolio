import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


const Hero = () => {

  const navigate = useNavigate();

 

return (
   <>
    <section className="section flex items-center">
      <AnimatePresence>
      <div className="md:w-[90%] md:mx-auto flex flex-col-reverse gap-7 md:flex-row md:justify-between  ">
        
        <motion.div className="mx-5 flex flex-col justify-center md:w-[60%] gap-5 mb-5">
          <div className="hidden md:flex w-70 object-contain overflow-hidden object-center">
            <img src="./images/jcropped.png" alt="" />
          </div>
          <div className="md:w-[80%]">
           <p className="text-[2rem] mb-3">Transforming Ideas into Valuable Digital Expereinces.<br/>
            designing and building modern scalable applications.
             </p>
          </div>
          <button onClick={()=> navigate('/define_the_project')} className="bg-[#B99470] w-55 py-3 px-4 rounded-md text-2xl">Work With Me!</button>
          
        </motion.div>  
          
        <div className="md:w-2/5 bg-[#B99470] object-contain rounded-bl-md rounded-br-md ">
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