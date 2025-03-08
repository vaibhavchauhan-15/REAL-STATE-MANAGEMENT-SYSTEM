import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { FaSearch, FaHome, FaBuilding, FaMoneyBillWave, FaArrowRight, FaChevronDown } from 'react-icons/fa';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [isVisible, setIsVisible] = useState({
    features: false,
    slider: false,
    offers: false,
    rent: false,
    sale: false
  });
  
  const featuresRef = useRef(null);
  const sliderRef = useRef(null);
  const offersRef = useRef(null);
  const rentRef = useRef(null);
  const saleRef = useRef(null);
  
  SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
  
  // Background images for hero section
  const heroImages = [
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  ];
  
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === featuresRef.current) {
            setIsVisible(prev => ({ ...prev, features: true }));
          } else if (entry.target === sliderRef.current) {
            setIsVisible(prev => ({ ...prev, slider: true }));
          } else if (entry.target === offersRef.current) {
            setIsVisible(prev => ({ ...prev, offers: true }));
          } else if (entry.target === rentRef.current) {
            setIsVisible(prev => ({ ...prev, rent: true }));
          } else if (entry.target === saleRef.current) {
            setIsVisible(prev => ({ ...prev, sale: true }));
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (sliderRef.current) observer.observe(sliderRef.current);
    if (offersRef.current) observer.observe(offersRef.current);
    if (rentRef.current) observer.observe(rentRef.current);
    if (saleRef.current) observer.observe(saleRef.current);
    
    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (sliderRef.current) observer.unobserve(sliderRef.current);
      if (offersRef.current) observer.unobserve(offersRef.current);
      if (rentRef.current) observer.unobserve(rentRef.current);
      if (saleRef.current) observer.unobserve(saleRef.current);
    };
  }, []);
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40 z-10"></div>
        
        {/* Background Image Carousel */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={1500}
          className="absolute inset-0 h-full w-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div className="text-white max-w-2xl animate-fade-in">
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up' style={{ animationDelay: '0.3s' }}>
                Welcome to <span className="text-yellow-500">DreamHeaven</span>
              </h1>
              <p className='text-xl mb-8 text-white animate-slide-up' style={{ animationDelay: '0.6s' }}>
                Discover your perfect property in India's most vibrant cities. 
                Browse our exclusive collection of homes, apartments, and commercial spaces in Mumbai, Delhi, Bangalore, and more.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 animate-slide-up' style={{ animationDelay: '0.9s' }}>
                <Link
                  to='/search'
                  className='bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center no-underline hover:shadow-lg transform hover:-translate-y-1'
                >
                  <FaSearch className="mr-2" /> Search Properties
                </Link>
                <Link
                  to='/create-listing'
                  className='bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition duration-300 flex items-center justify-center no-underline'
                >
                  <FaHome className="mr-2" /> List Your Property
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-subtle">
          <button 
            onClick={scrollToFeatures}
            className="text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
          >
            <FaChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-black mb-3">Why Choose DreamHeaven</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-4"></div>
            <p className="mt-4 text-lg text-gray-600">We provide the best real estate experience across India with top-notch features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-yellow-500 hover-lift transition-all duration-700 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4 animate-float">
                <FaHome className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Wide Property Selection</h3>
              <p className="text-gray-600">Browse thousands of properties across different categories and locations in major Indian cities.</p>
            </div>
            
            <div className={`bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-yellow-500 hover-lift transition-all duration-700 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4 animate-float">
                <FaBuilding className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Verified Listings</h3>
              <p className="text-gray-600">All properties are verified to ensure you get accurate and trustworthy information with RERA compliance.</p>
            </div>
            
            <div className={`bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-yellow-500 hover-lift transition-all duration-700 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4 animate-float">
                <FaMoneyBillWave className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Best Deals</h3>
              <p className="text-gray-600">Find properties with special offers and discounts starting from just ₹25 lakhs to save on your investment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Property Slider */}
      <div ref={sliderRef} className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center mb-8 transition-all duration-700 ${isVisible.slider ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-3xl font-bold text-black">Featured Properties</h2>
              <div className="h-1 w-20 bg-yellow-500 mt-2"></div>
            </div>
            <Link to="/search" className="text-yellow-500 hover:text-yellow-600 flex items-center font-medium no-underline group">
              View All <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible.slider ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Swiper 
              navigation 
              pagination={{ clickable: true }} 
              autoplay={{ delay: 5000 }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {offerListings && offerListings.length > 0 && 
                offerListings.map((listing) => (
                  <SwiperSlide key={listing._id}>
                    <div className="h-full">
                      <ListingItem listing={listing} />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>

      {/* Listings by Category */}
      <div className="py-16 bg-white">
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Special Offers */}
          {offerListings && offerListings.length > 0 && (
            <div ref={offersRef} className='mb-16'>
              <div className={`mb-6 transition-all duration-700 ${isVisible.offers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className='text-2xl font-bold text-black'>Special Offers</h2>
                <div className="h-1 w-16 bg-yellow-500 mt-2 mb-4"></div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Exclusive deals in prime locations of Mumbai, Delhi, and Bangalore</p>
                  <Link className='text-yellow-500 hover:text-yellow-600 flex items-center font-medium no-underline group' to={'/search?offer=true'}>
                    View All <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible.offers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
                {offerListings.map((listing, index) => (
                  <div key={listing._id} style={{ animationDelay: `${0.1 * index}s` }}>
                    <ListingItem listing={listing} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Properties for Rent */}
          {rentListings && rentListings.length > 0 && (
            <div ref={rentRef} className='mb-16'>
              <div className={`mb-6 transition-all duration-700 ${isVisible.rent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className='text-2xl font-bold text-black'>Properties for Rent</h2>
                <div className="h-1 w-16 bg-yellow-500 mt-2 mb-4"></div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Find your perfect rental property in Pune, Hyderabad, and Chennai</p>
                  <Link className='text-yellow-500 hover:text-yellow-600 flex items-center font-medium no-underline group' to={'/search?type=rent'}>
                    View All <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible.rent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
                {rentListings.map((listing, index) => (
                  <div key={listing._id} style={{ animationDelay: `${0.1 * index}s` }}>
                    <ListingItem listing={listing} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Properties for Sale */}
          {saleListings && saleListings.length > 0 && (
            <div ref={saleRef} className='mb-8'>
              <div className={`mb-6 transition-all duration-700 ${isVisible.sale ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className='text-2xl font-bold text-black'>Properties for Sale</h2>
                <div className="h-1 w-16 bg-yellow-500 mt-2 mb-4"></div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Invest in your dream property in Kolkata, Ahmedabad, and Jaipur</p>
                  <Link className='text-yellow-500 hover:text-yellow-600 flex items-center font-medium no-underline group' to={'/search?type=sale'}>
                    View All <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible.sale ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
                {saleListings.map((listing, index) => (
                  <div key={listing._id} style={{ animationDelay: `${0.1 * index}s` }}>
                    <ListingItem listing={listing} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Ready to Find Your Dream Home in India?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of satisfied customers who found their perfect place with DreamHeaven across India.
          </p>
          <Link
            to="/search"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition duration-300 no-underline hover:shadow-lg transform hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Start Searching Now
          </Link>
        </div>
      </div>
    </div>
  );
}
