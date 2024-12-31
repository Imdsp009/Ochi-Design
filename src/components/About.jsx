import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-.1.5" className='w-full p-20 bg-[#CDEA67] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue Montreal'] text-[4vw] leading-[4.5vw]">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full border-t-[1px] mt-10 pt-10 border-[#99AD53] flex gap-5 ">
        <div className="w-1/2">
            <h1 className='text-[5vw]'>Our approach:</h1>
            <button className="px-10 py-6 mt-5 bg-zinc-900 rounded-full text-white flex items-center gap-10 ">Read More 
              <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#94a84d]'>
          <img className='w-[133vw] h-full rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="ochi design" />
        </div>
      </div>
    </div>
  )
}

export default About