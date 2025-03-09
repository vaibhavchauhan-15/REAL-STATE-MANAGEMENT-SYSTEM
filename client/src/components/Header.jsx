import { FaSearch, FaBars, FaTimes, FaHome, FaBuilding, FaInfoCircle, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-black/90 backdrop-blur-md' : 'py-4 bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center no-underline group">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-white group-hover:text-gray-200 transition-colors">Dream</span>
            <span className="text-yellow-500 group-hover:text-yellow-400 transition-colors">Heaven</span>
            <span className="ml-1 h-2 w-2 bg-yellow-500 rounded-full animate-pulse-subtle hidden sm:block"></span>
          </h1>
        </Link>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-yellow-400 transition no-underline font-medium relative group flex items-center">
            <FaHome className="mr-2 text-yellow-500 group-hover:scale-110 transition-transform" />
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/search" className="text-white hover:text-yellow-400 transition no-underline font-medium relative group flex items-center">
            <FaBuilding className="mr-2 text-yellow-500 group-hover:scale-110 transition-transform" />
            <span>Properties</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition no-underline font-medium relative group flex items-center">
            <FaInfoCircle className="mr-2 text-yellow-500 group-hover:scale-110 transition-transform" />
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <form 
          onSubmit={handleSubmit} 
          className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-gray-700 focus-within:border-yellow-500 px-4 py-2 w-72 transition-all duration-300 focus-within:shadow-md focus-within:bg-white/20"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-grow outline-none text-white text-sm bg-transparent placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-white hover:text-yellow-500 transition ml-2 animate-pulse-subtle">
            <FaSearch />
          </button>
        </form>

        {/* User Profile / Sign In */}
        <div className="flex items-center">
          {currentUser ? (
            <Link to="/profile" className="flex items-center no-underline hover-lift">
              <div className="hidden sm:block mr-3 text-sm font-medium text-white">
                {currentUser.username}
              </div>
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-yellow-500 transition-transform hover:scale-105 duration-300 shadow-md">
                <img
                  src={currentUser.avatar}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          ) : (
            <Link to="/sign-in" className="btn-primary flex items-center">
              <FaUserCircle className="mr-2" />
              <span>Sign In</span>
            </Link>
          )}
          
          {/* Mobile Menu Button */}
          <button 
            className="ml-4 md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6 animate-spin-slow" />
            ) : (
              <FaBars className="h-6 w-6 animate-pulse-subtle" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-2 space-y-3 bg-gray-900 glass-effect-dark">
          <Link 
            to="/" 
            className="block text-white hover:text-yellow-400 py-2 no-underline font-medium animate-slide-right flex items-center"
            style={{ animationDelay: '0.1s' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaHome className="mr-3 text-yellow-500" /> Home
          </Link>
          <Link 
            to="/search" 
            className="block text-white hover:text-yellow-400 py-2 no-underline font-medium animate-slide-right flex items-center"
            style={{ animationDelay: '0.2s' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaBuilding className="mr-3 text-yellow-500" /> Properties
          </Link>
          <Link 
            to="/about" 
            className="block text-white hover:text-yellow-400 py-2 no-underline font-medium animate-slide-right flex items-center"
            style={{ animationDelay: '0.3s' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaInfoCircle className="mr-3 text-yellow-500" /> About
          </Link>
        </div>
      </div>
      
      {/* Mobile Search - only visible on mobile when menu is closed */}
      <div className={`md:hidden px-4 pb-4 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <form 
          onSubmit={handleSubmit} 
          className="flex items-center bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-gray-700 px-4 py-2 focus-within:border-yellow-500 transition-all duration-300"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-grow outline-none text-white text-sm bg-transparent placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-white hover:text-yellow-500 transition ml-2">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
