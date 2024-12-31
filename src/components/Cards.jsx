import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-32 bg-zinc-900 flex items-center gap-5'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative w-full rounded-xl h-[50vh] bg-[#004D43] flex items-center justify-center'>
          <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-5 py-1 border-2 border-[#B4D664] rounded-full left-10 bottom-10 text-[#B4D664]'>&copy;2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
          <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 '>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center'>
          <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 '>BUISNESS BOOTCAMP </button>
        </div>
      </div>
    </div>
  )
}

export default Cards