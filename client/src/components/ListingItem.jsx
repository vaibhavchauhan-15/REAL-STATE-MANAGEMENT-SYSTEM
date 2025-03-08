import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaBath, FaRuler, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

export default function ListingItem({ listing }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to format price in Indian format (with commas)
  const formatIndianPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  return (
    <div 
      className='bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg w-full sm:w-[330px] border border-gray-200 hover:border-yellow-500 hover-lift animate-fade-in'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/listing/${listing._id}`} className="no-underline text-inherit">
        <div className="relative">
          <div className="overflow-hidden">
            <img
              src={
                listing.imageUrls[0] ||
                'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
              }
              alt='listing cover'
              className={`h-[320px] sm:h-[220px] w-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          </div>
          
          {listing.offer && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-black px-3 py-1 rounded-full font-medium text-sm shadow-md animate-pulse-subtle">
              Special Offer
            </div>
          )}
          
          <div className="absolute top-2 left-2">
            <button className="bg-white/80 hover:bg-white text-gray-700 hover:text-red-500 p-2 rounded-full transition-colors duration-300">
              <FaRegHeart className={`h-5 w-5 ${isHovered ? 'animate-bounce-subtle' : ''}`} />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24"></div>
          
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-lg font-bold truncate max-w-[250px] drop-shadow-md">
              {listing.name}
            </h3>
            <div className='flex items-center gap-1'>
              <MdLocationOn className='h-4 w-4 text-yellow-400' />
              <p className='text-sm truncate max-w-[200px] text-gray-200'>
                {listing.address}
              </p>
            </div>
          </div>
        </div>
        
        <div className='p-4 flex flex-col gap-2 w-full'>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          
          <div className="mt-2 flex justify-between items-center">
            <p className='text-black font-bold text-lg'>
              ₹{listing.offer
                ? formatIndianPrice(listing.discountPrice)
                : formatIndianPrice(listing.regularPrice)}
              {listing.type === 'rent' && ' / month'}
            </p>
            
            {listing.offer && (
              <p className='text-sm line-through text-gray-500'>
                ₹{formatIndianPrice(listing.regularPrice)}
              </p>
            )}
          </div>
          
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
