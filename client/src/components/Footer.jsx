import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaSearch, FaInfoCircle, FaUserCircle, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set footer visible after a small delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-white">Dream</span>
              <span className="text-yellow-500">Heaven</span>
              <span className="ml-2 h-2 w-2 bg-yellow-500 rounded-full animate-pulse-subtle"></span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Find your dream property with our comprehensive real estate management platform. We connect buyers with sellers to make property transactions simple and efficient.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-yellow-400 transition-all duration-300 text-lg no-underline hover-scale flex items-center justify-center">
                <FaFacebook />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-yellow-400 transition-all duration-300 text-lg no-underline hover-scale flex items-center justify-center">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-yellow-400 transition-all duration-300 text-lg no-underline hover-scale flex items-center justify-center">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-yellow-400 transition-all duration-300 text-lg no-underline hover-scale flex items-center justify-center">
                <FaYoutube />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-yellow-400 transition-all duration-300 text-lg no-underline hover-scale flex items-center justify-center">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaHome className="mr-3 text-yellow-500 group-hover:translate-x-1 transition-transform" /> 
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaSearch className="mr-3 text-yellow-500 group-hover:translate-x-1 transition-transform" /> 
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">Search</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaInfoCircle className="mr-3 text-yellow-500 group-hover:translate-x-1 transition-transform" /> 
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">About</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaUserCircle className="mr-3 text-yellow-500 group-hover:translate-x-1 transition-transform" /> 
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Property Types
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/search?type=sale" className="text-gray-400 hover:text-yellow-400 transition no-underline group flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">For Sale</span>
                </Link>
              </li>
              <li>
                <Link to="/search?type=rent" className="text-gray-400 hover:text-yellow-400 transition no-underline group flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">For Rent</span>
                </Link>
              </li>
              <li>
                <Link to="/search?furnished=true" className="text-gray-400 hover:text-yellow-400 transition no-underline group flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">Furnished</span>
                </Link>
              </li>
              <li>
                <Link to="/search?parking=true" className="text-gray-400 hover:text-yellow-400 transition no-underline group flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                  <span className="border-b border-transparent group-hover:border-yellow-500 transition-all">With Parking</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 hover:text-white transition-colors duration-300 group">
                <FaMapMarkerAlt className="mr-3 text-yellow-500 animate-pulse-subtle mt-1 group-hover:scale-110 transition-transform" />
                <span>42, MG Road, Bengaluru, Karnataka 560001</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group">
                <FaEnvelope className="mr-3 text-yellow-500 animate-pulse-subtle group-hover:scale-110 transition-transform" />
                <span>info@dreamheaven.in</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group mb-6">
                <FaPhone className="mr-3 text-yellow-500 animate-pulse-subtle group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
            <button className="btn-primary w-full flex items-center justify-center">
              <FaEnvelope className="mr-2" /> Contact Us
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} DreamHeaven Real Estate. All rights reserved.</p>
          <p className="mt-2 text-gray-500 text-sm">
            Developed by Vaibhav Chauhan (Project Lead), Munna Das, Vikash Singh, Himanshu Shingh, Durgesh Nikam
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all duration-500 hover:bg-yellow-600 z-50 ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
} 