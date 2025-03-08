import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaSearch, FaInfoCircle, FaUserCircle, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-white">Dream</span>
              <span className="text-yellow-500">Heaven</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Find your dream property with our comprehensive real estate management platform. We connect buyers with sellers to make property transactions simple and efficient.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition text-xl no-underline hover-scale">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition text-xl no-underline hover-scale">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition text-xl no-underline hover-scale">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition text-xl no-underline hover-scale">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaHome className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform" /> Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaSearch className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform" /> Search
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaInfoCircle className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform" /> About
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-yellow-400 transition flex items-center no-underline group">
                  <FaUserCircle className="mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform" /> Profile
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/search?type=sale" className="text-gray-400 hover:text-yellow-400 transition no-underline hover:pl-2 duration-300">
                  For Sale
                </Link>
              </li>
              <li>
                <Link to="/search?type=rent" className="text-gray-400 hover:text-yellow-400 transition no-underline hover:pl-2 duration-300">
                  For Rent
                </Link>
              </li>
              <li>
                <Link to="/search?furnished=true" className="text-gray-400 hover:text-yellow-400 transition no-underline hover:pl-2 duration-300">
                  Furnished
                </Link>
              </li>
              <li>
                <Link to="/search?parking=true" className="text-gray-400 hover:text-yellow-400 transition no-underline hover:pl-2 duration-300">
                  With Parking
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2 text-yellow-500 animate-pulse-subtle" />
                <span>42, MG Road, Bengaluru, Karnataka 560001</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                <FaEnvelope className="mr-2 text-yellow-500 animate-pulse-subtle" />
                <span>info@dreamheaven.in</span>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-4">
                <FaPhone className="mr-2 text-yellow-500 animate-pulse-subtle" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded transition mt-2 no-underline hover:shadow-lg transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DreamHeaven Real Estate. All rights reserved.</p>
          <p className="mt-2">
            Developed by Vaibhav Chauhan (Project Lead), Munna Das, Vikash Singh, Himanshu Shingh, Durgesh Nikam
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-600 ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
} 