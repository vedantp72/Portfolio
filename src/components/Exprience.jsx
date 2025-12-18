import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

function Exprience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='experience'
            className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                <h2 className='text-center font-bold text-3xl mb-4 '>Work <span className='text-fuchsia-500'>Experience</span> </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>My professional journey and roles I've undertaken</p>
                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12 '>
                        {
                            workData.map((work, index) => (
                                <div key={index} className='relative pl-12 before:content-[""] before:absolute before:top-0 before:left-0 before:w-[2px] before:h-full before:bg-fuchsia-500 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
                                    <div className='absolute top-0 left-[-0.5rem] w-5 h-5 bg-fuchsia-500 rounded-full'></div>
                                    <div className='bg-dark-300 rounded-2xl p-6 '>
                                        <div className='flex justify-between items-start mb-2'>
                                            <h3 className='text-xl font-semibold'>{work.role}</h3>
                                            <span className='px-3 py-1 rounded-full text-fuchsia-500 text-xs md:text-sm'>{work.duration}</span>
                                        </div>
                                        <p className='text-gray-400 mb-2'>{work.company}</p>
                                        <p className='text-gray-300 mt-4'>{work.description}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


        </motion.div>
    )
}

export default Exprience
