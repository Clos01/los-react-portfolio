import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#0a192f] text-gray-300'>  
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000p] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl dont-bold inline border-b-4 border-pink-600 '> About</p>
                </div>
            </div> 
            <div></div>
  
    <div className='max-w-[1000p] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold '>
            <p>Hi. I'm Carlos Rivas Nice to meet you. Please take a look around </p>
        </div>
       <p className='text-[15px]'> A little about myself.. i am passionate about building software that can help improve the lives of those around me and myself. I want to learn as much as i can and hopefully one day have a business of my mine and i love building things from scratch and this is why being a developer is fun to me because you get to see the process of how it all started. </p> 
    </div>

        </div>

    </div>
  )
}

export default About