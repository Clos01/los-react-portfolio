import React from 'react'
import budget from '../assets/budget.png'
import Dash from '../assets/Dash.png'
import friendless from '../assets/friendless.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>// Check out some of my recent work </p>
            </div>
          
 {/* card conatiner     */}

            <div
                className='grid sm:grid-cols-2 md:grid-cols-2 gap-4  py-1 '>
                    {/* grid item  */}
                <div style={{backgroundImage: `url(${budget})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects  */}

                <div className='opacity-0 group-hover:opacity-100'>
                       
                            <span className='text-2xl font-bold text-white tracking-wider'>
        Budget Tracker  
                            </span>
                            <div className='pt-8 text-center'>
                                    <a href="https://clos01.github.io/Los-Budget-Tracker/">
                                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                        Demo
                                                    </button>
                                        </a>

                                        <a href="https://github.com/Clos01/Los-Budget-Tracker">
                                                    <button className='text-center  rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
                                                    Code
                                                    </button>
                                        </a>

                            </div>
                     
                    </div>
                </div>
            </div>           {/* card conatiner     */}


             <div
                className='grid sm:grid-cols-2 md:grid-cols-2 gap-4  py-2'>
                <div style={{backgroundImage: `url(${ Dash })`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div py-9'>
                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Tech Blog
                            </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://lostechblog.herokuapp.com/">
                                                    <button className='text-center  rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
                                                        Demo
                                                    </button>
                                        </a>

                                        <a href="https://github.com/Clos01/Tech-blog-los">
                                                    <button className='text-center  rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
                                                    Code
                                                    </button>
                                        </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          

             {/* card conatiner     */}


             <div
                className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 py-2 '>
                <div style={{backgroundImage: `url(${friendless})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
            friendless in Seattle 
                            </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://friendless-in-seattle.herokuapp.com/">
                                                    <button className='text-center  rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
                                                        Demo
                                                    </button>
                                        </a>

                                        <a href="https://github.com/Clos01/Friendless-in-seattle">
                                                    <button className='text-center  rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg '>
                                                    Code
                                                    </button>
                                        </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

  
          



    </div>
  )
}

export default Work