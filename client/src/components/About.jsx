import React from 'react'

const About = () => {
    return (
        <div name='about' className='md:pt-5 pb-5 pt-20 bg-gradient-to-b from-slate-900 to-slate-700 min-h-screen text-white'>
            <div className='max-w-screen-xl mx-auto flex justify-center flex-col h-full md:h-screen px-4 md:px-8'>
                <div className='pb-8 flex flex-col items-center '>
                    <h1 className='text-4xl font-bold border-b-4 border-gray-500 inline'>About</h1>
                </div>
                <p className='text-lg md:text-xl text-center'>
                    This is a simple React application demonstrating navigation and basic form validation using Tailwind CSS.
                </p>
            </div>
        </div>
    )
}

export default About