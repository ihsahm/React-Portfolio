import React from 'react'

const  About = () => {
  return (
    <div name='about' className='w-full my-32'>
       <div className='max-[1240px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>
               About Me
            </h2>
            <p className='text-3xl py-6 text-gray-500'>Informations and qualifications about me</p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl '>
                <p className='text-6xl font-bold text-indigo-600'>HiLCoE School of Computer Science</p>
                <p className='text-gray-400 mt-4'>BSc. of Computer Science(2019-2023)</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl '>
                <p className='text-6xl font-bold text-indigo-600'>South West Academy</p>
                <p className='text-gray-400 mt-4'>High School Degree(2009-2018)</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl '>
                <p className='text-6xl font-bold text-indigo-600 ml-1 mr-1'>24 hours and 7 days available</p>
                <p className='text-gray-400 mt-4'>Available 24 hours a day and 7 days a week</p>
            </div>
        </div>
       </div>
        
        </div>
  )
}

export default About