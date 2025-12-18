import { aboutInfo, assets } from './../assets/assets';
import { motion } from 'framer-motion';
// import { div } from 'framer-motion/client';

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'>

      <div className='container mx-auto px-6'>
        {/* Heading? */}
        <h2 className='text-center font-bold text-3xl mb-4 '>About <span className='text-fuchsia-500'>Me</span> </h2>
        <p className='text-center text-lg text-gray-400 max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

        {/* Image + About/Journey Container */}
        <div className='flex flex-col md:flex-row items-center gap-12'>

          {/* Image */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className=' rounded-2xl w-90 h-full object-cover'
              src={assets.profileImg} alt="ProfileImg" />
          </div>

          {/* About/Journey/text-content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'>
            <div className='text-lg text-gray-300 space-y-4 rounded-2xl p-2'>
              <h3 className='text-2xl text-white font-semibold mb-4'>My Journey</h3>
              <p className='mb-8'>Hello! I'm <span className='text-fuchsia-500'>Vedant Patel</span>, a passionate Front-End Developer with a 2+ years of experience in creating dynamic and user-friendly web applications. </p>
              <p>With a strong foundation in HTML, CSS, and JavaScript, I have honed my skills in modern frameworks like React.js to build responsive and interactive web applications. I thrive on challenges and continuously seek to learn and grow in this ever-evolving field.</p>
              <p>When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and indulging in my hobbies like traveling. I'm excited to connect with like-minded individuals and collaborate on projects that push the boundaries of web development.</p>
            </div>
          </motion.div>
        </div>
        {/* Cards Section */}

        <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6'>
          {
            aboutInfo.map((data, index) => (
              <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer '>
                <div className='text-fuchsia-500 text-4xl mb-4'>
                  <data.icon />
                </div>
                <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
                <p className='text-gray-400'>{data.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage

//
//

//
//

//     <p className='text-center mt-5 mx-20 text-lg'>Hello! I'm <span className='text-purple-500'>Vedant</span>, a passionate developer with a love for creating dynamic and  web applications. With a background in [Your Background], I specialize in [Your Specialization]. When I'm not coding, I enjoy [Your Hobbies]. Feel free to explore my projects and get in touch!</p>
//   </div>