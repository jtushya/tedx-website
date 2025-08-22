import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ContactPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <Helmet>
        <title>Contact | TEDx BITS Hyderabad 2025</title>
        <meta name="description" content="Get in touch with the TEDx BITS Hyderabad team for inquiries about partnerships, sponsorships, speaking opportunities, or general information." />
      </Helmet>
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Get in</span> <span className="text-tedx-red">Touch</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Have questions or interested in partnering with us? We'd love to hear from you. Reach out to the TEDx BITS Hyderabad team using the information below.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="glass p-8 rounded-xl"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-bold mb-6"
                >
                  Send Us a Message
                </motion.h2>
                
                <form onSubmit={handleSubmit}>
                  <motion.div variants={itemVariants} className="mb-6 relative">
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-tedx-gray/50 border border-tedx-gray/30 rounded-lg p-3 pl-4 text-white focus:outline-none focus:ring-2 focus:ring-tedx-red peer"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none 
                      peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-tedx-red
                      peer-valid:-top-6 peer-valid:left-0 peer-valid:text-sm"
                    >
                      Your Name
                    </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-6 relative">
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-tedx-gray/50 border border-tedx-gray/30 rounded-lg p-3 pl-4 text-white focus:outline-none focus:ring-2 focus:ring-tedx-red peer"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none 
                      peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-tedx-red
                      peer-valid:-top-6 peer-valid:left-0 peer-valid:text-sm"
                    >
                      Email Address
                    </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-6 relative">
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full bg-tedx-gray/50 border border-tedx-gray/30 rounded-lg p-3 pl-4 text-white focus:outline-none focus:ring-2 focus:ring-tedx-red peer"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="subject" 
                      className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none 
                      peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-tedx-red
                      peer-valid:-top-6 peer-valid:left-0 peer-valid:text-sm"
                    >
                      Subject
                    </label>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-6 relative">
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full bg-tedx-gray/50 border border-tedx-gray/30 rounded-lg p-3 pl-4 text-white focus:outline-none focus:ring-2 focus:ring-tedx-red peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none 
                      peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-tedx-red
                      peer-valid:-top-6 peer-valid:left-0 peer-valid:text-sm"
                    >
                      Your Message
                    </label>
                  </motion.div>
                  
                  <motion.button 
                    variants={itemVariants}
                    type="submit" 
                    className="btn-3d w-full"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
              
              {/* Contact Information and Map */}
              <div className="space-y-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="glass p-8 rounded-xl"
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-2xl font-bold mb-6"
                  >
                    Contact Information
                  </motion.h2>
                  
                  <motion.div variants={itemVariants} className="flex items-start mb-4">
                    <Mail className="text-tedx-red mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-300">tedx@bits-hyderabad.ac.in</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start mb-4">
                    <Phone className="text-tedx-red mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-300">+91 (123) 456-7890</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start">
                    <MapPin className="text-tedx-red mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-300">BITS Pilani Hyderabad Campus, Jawaharnagar, Shameerpet, Hyderabad, Telangana 500078</p>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Social Media */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="glass p-8 rounded-xl"
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-2xl font-bold mb-6"
                  >
                    Follow Us
                  </motion.h2>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-wrap gap-4"
                  >
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-tedx-gray/50 rounded-full hover:bg-tedx-red/80 transition-colors">
                      <Facebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-tedx-gray/50 rounded-full hover:bg-tedx-red/80 transition-colors">
                      <Twitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-tedx-gray/50 rounded-full hover:bg-tedx-red/80 transition-colors">
                      <Instagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-tedx-gray/50 rounded-full hover:bg-tedx-red/80 transition-colors">
                      <Linkedin />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-tedx-gray/50 rounded-full hover:bg-tedx-red/80 transition-colors">
                      <Youtube />
                    </a>
                  </motion.div>
                </motion.div>
                
                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-xl overflow-hidden h-64 md:h-72"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0894646895143!2d78.58229881481268!3d17.444928388046097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb83594a86c1d5%3A0x737395cff9c2129f!2sBITS%20Pilani%20Hyderabad%20Campus!5e0!3m2!1sen!2sin!4v1600531518449!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="BITS Pilani Hyderabad Campus"
                  ></iframe>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;