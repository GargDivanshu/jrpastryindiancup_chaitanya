import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' w-[100vw] md:w-[98.8vw]  p-2 relative mt-28   bg-white min-h-[40vh] md:min-h-[90vh] text-primary mainbg grid  justify-center items-center font-pop'>
      {/* <Image src={'/bg_main.png'} fill={true}/> */}
      <div className='absolute w-full h-full bg-black/80 z-0'></div>
      <div className='z-20'>
        {/* <h3 className='text-white text-lg text-center font-bold uppercase'>Hammer Foods Presents</h3> */}
        <div className='flex flex-col text-center text-white text-3xl font-extrabold'>
          <img src="/pp/elle.svg" className='mx-auto  h-[56px] md:h-32 my-4  rounded-xl ' alt="" />
          <p className='text-lg md:text-2xl  font-bold'>Presents</p>
          {/* <img src="/pp/delta.png" className='ml-3 inline h-24 bg-white rounded-xl' alt="" /> */}
        </div>
        {/* <h5 className='text-4xl text-center text-white tracking-[2rem]'>Presents</h5> */}
        <h1 className='special-font text-[3.4rem] text-center sm:text-7xl mb-3 md:text-8xl lg:text-9xl  text-primary z-50'>PASTRY EVENT</h1>


        <span className='text-white text-[1.1rem] text-center sm:text-3xl lg:text-5xl font-bold uppercase'>
          Junior Pastry Indian Cup 2023
          {/* <Typewriter
            options={{
              strings: [' Junior Pastry Indian Cup 2023'],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          /> */}
        </span>
        <h2 className='text-md p-2 text-center sm:text-2xl md:text-2xl mt-3 font-semibold text-white'>02-03 August 2023, Indian Expo Centre & Mart, Greater Noida, NCR, India</h2>

        <div className=' text-center text-white mt-10 italic text-md md:text-2xl font-semibold'>
         
          Powered By
          <img src="/pp/delta.png" className='ml-5 mb-3 inline h-[50px]  md:h-28 rounded-xl' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero