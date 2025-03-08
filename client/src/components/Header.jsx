import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
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
    <header className={`bg-black text-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center no-underline group">
          <h1 className="text-2xl font-bold">
            <span className="text-white group-hover:text-gray-200 transition-colors">Dream</span>
            <span className="text-yellow-500 group-hover:text-yellow-400 transition-colors">Heaven</span>
          </h1>
        </Link>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-yellow-400 transition no-underline font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/search" className="text-white hover:text-yellow-400 transition no-underline font-medium relative group">
            Properties
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition no-underline font-medium relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <form 
          onSubmit={handleSubmit} 
          className="hidden md:flex items-center bg-white rounded-full overflow-hidden border-2 border-gray-300 focus-within:border-yellow-500 px-4 py-2 w-72 transition-all duration-300 focus-within:shadow-md"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-grow outline-none text-black text-sm bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-black hover:text-yellow-500 transition ml-2 animate-pulse-subtle">
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
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-yellow-500 transition-transform hover:scale-105 duration-300">
                <img
                  src={currentUser.avatar}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
          ) : (
            <Link to="/sign-in" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-full transition duration-300 no-underline hover:shadow-lg transform hover:-translate-y-1">
              Sign In
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
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-2 space-y-3 bg-gray-900">
          <Link 
            to="/" 
            className="block text-white hover:text-yellow-400 py-2 no-underline font-medium animate-slide-right"
            style={{ animationDelay: '0.1s' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/search" 
            className="block text-white hover:text-yellow-400 py-2 no-underline font-medium animate-slide-right"
            style={{ animationDelay: '0.2s' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Properties
          </Link>
          <Link 
            to="/about" 
            className="block text-white hover:text-yellow-400 py-2 no-underline font-medium animate-slide-right"
            style={{ animationDelay: '0.3s' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
      
      {/* Mobile Search - only visible on mobile when menu is closed */}
      <div className={`md:hidden px-4 pb-4 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <form 
          onSubmit={handleSubmit} 
          className="flex items-center bg-white rounded-full overflow-hidden border-2 border-gray-300 px-4 py-2 focus-within:border-yellow-500 transition-all duration-300"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="flex-grow outline-none text-black text-sm bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-black hover:text-yellow-500 transition ml-2">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
