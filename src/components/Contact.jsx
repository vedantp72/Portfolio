import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa"
import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
function Contact() {

    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_808t3bi",
            "template_nr0vlpd",
            form.current,
            "AEM9QfItGtoTtHLjW"

        ).then(() => {
            setIsSent(true);
            form.current.reset();
            toast.success("Message sent successfully! ✅", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        },
            (error) => {
                toast.error("Failed to send message. Please try again. ❌", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            }
        )

    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='contact'
            className='py-20 bg-dark-200'>
                <ToastContainer />
            <div className='container mx-auto px-6'>
                <h2 className='text-center font-bold text-3xl mb-4 '>Contact <span className='text-fuchsia-500'>Me</span> </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Get in touch with me for collaborations or inquiries</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <form ref={form} onSubmit={sendEmail} action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block  text-gray-300 mb-2">Your Name</label>
                                <input type="text" required id="name" name="name" className="w-full px-4 bg-dark-300 py-3 border border-gray-300 rounded-lg text-blue-200  focus:border-fuchsia-500 outline-none" />

                            </div>
                            <div>
                                <label htmlFor="email" className="block  text-gray-300 mb-2">Your Email</label>
                                <input type="email" required id="email" name="email" className="w-full px-4 bg-dark-300 py-3 border border-gray-300 text-blue-200 rounded-lg focus:border-fuchsia-500 outline-none" />

                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                <textarea type="textarea" required id="message" name="message" className="w-full h-40 px-4 bg-dark-300 py-3 border border-gray-300 rounded-lg text-blue-200 focus:border-fuchsia-500 outline-none" />
                            </div>
                            <button type="submit" className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 w-full font-medium rounded-lg transition-colors duration-300 cursor-pointer">Send Message</button>

                        </form>
                    </div>

                    {/* Social Links and Info */}
                    <div className="space-y-8 ">
                        <div className="flex items-start">
                            <div className="text-fuchsia-500 text-2xl mr-4">
                                <FaMapMarkerAlt className="text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Location
                                </h3>
                                <p className="text-gray-300">Pune, Maharashtra</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-fuchsia-500 text-2xl mr-4">
                                <FaEnvelope className="text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Email
                                </h3>
                                <p className="text-gray-300">vedantpatel72@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-fuchsia-500 text-2xl mr-4">
                                <FaPhone className="text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Phone
                                </h3>
                                <p className="text-gray-300">+91 9028461373</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/vedantp72" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-white hover:text-dark-300 transition duration-300">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/vedantp3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.instagram.com/jsk_vedant/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-[#C13584] hover:text-white transition duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-pink-400 hover:text-white transition duration-300">
                                    <FaDribbble />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
