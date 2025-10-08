import { AnimatePresence, motion } from "framer-motion"
import { logo } from "../assets/assets"

const Loading = () => {
  return (
    <>
    <AnimatePresence>
    <div className="flex justify-center items-center h-dvh">
      <motion.div
      initial={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.05, 1], // pulse effect
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      
      className="w-[80%] md:w-[60%] flex items-center justify-center"
      >
        <img src={logo} alt="" className="w-[80%] h-full object-cover" />
      </motion.div>
    </div>
    </AnimatePresence>
    </>
  )
}

export default Loading