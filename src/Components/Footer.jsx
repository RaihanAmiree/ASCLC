// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-950 text-gray-200 py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold mb-4 text-white">ASCLC</h3>
            <p className="text-sm leading-relaxed mb-6">
               Plan your path to professional success using career exploration tools, mentorship, skill-building resources, and guidance designed for students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Career Solutions</h4>
            <ul className="space-y-3">
              <li><Link to='/cv1' className="text-sm hover:text-white transition-colors duration-300">CV Builder</Link></li>
              <li><Link to='/chatbot' className="text-sm hover:text-white transition-colors duration-300">AI Chatbot</Link></li>
              <li><Link to='/library' className="text-sm hover:text-white transition-colors duration-300">Career Books</Link></li>
              <li><Link to='/course' className="text-sm hover:text-white transition-colors duration-300">Free Courses</Link></li>
              <li><Link to='/motivation' className="text-sm hover:text-white transition-colors duration-300">Motivations</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to='/' className="text-sm hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to='/about' className="text-sm hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to='/services' className="text-sm hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to='/explorer' className="text-sm hover:text-white transition-colors duration-300">Career Explorer</Link></li>
              <li><Link to='/registration' className="text-sm hover:text-white transition-colors duration-300">Sign In</Link></li>
            </ul>
          </div>

          {/* <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/explorer" element={<Explorer />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/cv1" element={<CVDesign1 />} />
              <Route path="/librarydoor" element={<PDFEntry />} />
              <Route path="/library" element={<CareerLibrary />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/motivation" element={<Motivation />} />
              <Route path="/course" element={<Course />} />
              <Route path="/registration" element={<Registration />} /> */}

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-start text-sm">
                <span className="mr-3 mt-1">&#x1F4CD;</span> {/* Location icon */}
                Adamjee Cantonment Public School, Dhaka Cantonment, Dhaka-1206
              </p>
              <p className="flex items-start text-sm">
                <span className="mr-3 mt-1">&#x1F551;</span> {/* Clock icon */}
                Working Hours :  24/7
              </p>
              <p className="flex items-start text-sm">
                <span className="mr-3 mt-1">&#x260E;</span> {/* Phone icon */}
                +880 1531 191 895
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2025 ASCLC. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;