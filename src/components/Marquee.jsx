import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed= ".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex  overflow-hidden whitespace-nowrap animate-scroll">
        {/* Repeating Text */}
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[20vw] leading-none font-['Founders Grotesk'] font-semibold uppercase -mt-[3vw] -mb-2 pt-10  pr-10">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[20vw] leading-none font-['Founders Grotesk'] font-semibold uppercase -mt-[3vw] -mb-2 pt-10 pr-10">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[20vw] leading-none font-['Founders Grotesk'] font-semibold uppercase -mt-[3vw] -mb-2 pt-10  pr-10">
          We are Ochi
        </motion.h1>
      </div>
    </div>

  )
}

export default Marquee