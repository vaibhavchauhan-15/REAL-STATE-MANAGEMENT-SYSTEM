import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaBath, FaRuler, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

export default function ListingItem({ listing }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Function to format price in Indian format (with commas)
  const formatIndianPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  return (
    <div 
      className='bg-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden rounded-xl w-full sm:w-[330px] border border-gray-200 hover:border-yellow-500 card-hover'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/listing/${listing._id}`} className="no-underline text-inherit">
        <div className="relative">
          <div className="overflow-hidden h-[320px] sm:h-[220px]">
            <img
              src={
                listing.imageUrls[0] ||
                'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
              }
              alt='listing cover'
              className={`h-full w-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 filter brightness-105' : 'scale-100'}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}></div>
          </div>
          
          {listing.offer && (
            <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full font-medium text-sm shadow-lg animate-pulse-subtle z-10 flex items-center">
              <span className="mr-1">Special Offer</span>
              <span className="inline-block w-2 h-2 bg-black rounded-full animate-pulse"></span>
            </div>
          )}
          
          <div className="absolute top-3 left-3 z-10">
            <button 
              className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-300 shadow-md"
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
            >
              {isFavorite ? (
                <FaHeart className="h-5 w-5 text-red-500 animate-scale-in" />
              ) : (
                <FaRegHeart className={`h-5 w-5 ${isHovered ? 'animate-bounce-subtle' : ''}`} />
              )}
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3 className="text-xl font-bold truncate max-w-[250px] text-white drop-shadow-md mb-1">
              {listing.name}
            </h3>
            <div className='flex items-center gap-1 mb-2'>
              <MdLocationOn className='h-4 w-4 text-yellow-400' />
              <p className='text-sm truncate max-w-[200px] text-gray-200'>
                {listing.address}
              </p>
            </div>
            
            <div className="flex justify-between items-center">
              <p className='text-white font-bold text-lg'>
                ₹{listing.offer
                  ? formatIndianPrice(listing.discountPrice)
                  : formatIndianPrice(listing.regularPrice)}
                <span className="text-xs font-normal ml-1">
                  {listing.type === 'rent' && ' / month'}
                </span>
              </p>
              
              {listing.offer && (
                <p className='text-sm line-through text-gray-400'>
                  ₹{formatIndianPrice(listing.regularPrice)}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className='p-4 flex flex-col gap-2 w-full'>
          <p className='text-sm text-gray-600 line-clamp-2 h-10'>
            {listing.description}
          </p>
          
          <div className='border-t border-gray-200 mt-3 pt-3 flex justify-between'>
            <div className='flex items-center text-gray-700 text-sm'>
              <FaBed className="mr-1 text-yellow-500" />
              <span className='font-medium'>
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </span>
            </div>
            <div className='flex items-center text-gray-700 text-sm'>
              <FaBath className="mr-1 text-yellow-500" />
              <span className='font-medium'>
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </span>
            </div>
            <div className={`bg-black text-white text-xs px-3 py-1 rounded-full uppercase transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
              {listing.type}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
