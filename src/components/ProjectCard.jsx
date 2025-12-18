import { p } from 'framer-motion/client'
import React from 'react'

function ProjectCard({ title, description, image, tech, demo }) {
    return (
        <div className='bg-dark-300 rounded-2xl overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer'>
            <img src={image} alt={title} className='w-full h-60 object-cover' />
            <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>
                    {title}
                </h3>
                <p className=' text-gray-400 mb-4'>
                    {description}
                </p>
                <div className='flex flex-wrap gap-1 mt-4'>
                    {
                        tech.map((item, index) => (
                            <span key={index} className='px-3 mt-2 py-1 text-sm rounded-full bg-dark-400 mr-1'>{item}</span>
                        ))
                    }
                </div>
                <div className='flex gap-2'>
                    <a href={demo} target='_blank' className="flex-1 text-center px-2 py-2 border bg-fuchsia-500 font-medium rounded-sm hover:bg-fuchsia-700 transition duration-300 mt-4">View Demo</a>
                    <a href='' className='flex-1 text-center px-0.1 py-2 border border-purple-500 font-medium rounded-sm hover:bg-purple-500 transition duration-300 mt-4'>Code</a>
                </div>

            </div>

        </div>
    )
}

export default ProjectCard
