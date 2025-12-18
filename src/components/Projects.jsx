import { motion } from 'framer-motion'
import { projects, assets  } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'


function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='projects'
            className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                <h2 className='text-center font-bold text-3xl mb-4'>
                    My <span className='text-fuchsia-500'>
                        Projects</span> </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>
                    A selection of my work</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                        {/* Project Card */}
                        {
                            projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))
                        }
                        </div>
                        <div className='text-center mt-12'>
                            <a href="#projects" className='inline-flex items-center px-6 py-3 border border-fuchsia-500 font-medium rounded-lg hover:bg-fuchsia-500 transition duration-300'>
                                <span>View More Projects</span>
                                <FaArrowRight className='ml-2' />
                            </a>
                    </div>
            </div>
        </motion.div>
    )
}

export default Projects
