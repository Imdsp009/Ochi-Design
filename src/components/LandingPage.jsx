import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  const textItems = ["We Create", "Eye-Opening", "Presentations"];
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen  bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {textItems.map((text, index) => (
          <div key={index} className="masker">
            <div className='w-fit flex items-center '>
              {index===1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='w-[9vw] h-[5.7vw] relative top-[0.8vw]  bg-red-500'></motion.div>)}
              <h1 className="uppercase text-[7.5vw] -mb-[1vw] leading-[7vw] tracking-tighter font-semibold font-['Founders Grotesk'] font-medium">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the first pitch to IPO"].map((item, index) =>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>) )}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md capitalize rounded-full'>
            START THE PROJECT
          </div>
          <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500  rounded-full'>
            <span className='rotate-[45deg]'><FaArrowUpLong /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
