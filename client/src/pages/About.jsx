import React from "react";
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine, FaBuilding, FaGlobe, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-black">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80')" }}></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-yellow-500">DreamHeaven</span></h1>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our platform is designed to streamline the process of buying, selling, and renting properties across India with a focus on user experience, security, and performance.
          </p>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Mission & Vision</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              At DreamHeaven, we aim to empower users with expert insights, user-friendly tools, and a deep understanding of the Indian real estate market. 
              Whether you're looking to buy your dream home, sell a property, or manage real estate assets in metros like Mumbai, Delhi, or Bangalore, our platform provides the solutions you need—every step of the way.
            </p>
            <p className="text-lg text-gray-700">
              With a commitment to transparency and efficiency, we transform the real estate experience into a smooth and rewarding journey. 
              DreamHeaven is built to make property management simpler, smarter, and more accessible for everyone across India.
            </p>
          </div>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-4">Our Core Values</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-yellow-500">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <FaUsers className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer-Focused</h3>
              <p className="text-gray-600">We prioritize our users' needs and strive to provide exceptional service to all Indian customers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-yellow-500">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <FaLightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously improve our platform with the latest technologies to serve the diverse Indian market.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-yellow-500">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <FaHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with honesty, transparency, and ethical practices in all our dealings, following RERA guidelines.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-yellow-500">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <FaChartLine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in our platform, services, and customer support across all Indian regions.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-4">Our Team</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 hover:border-yellow-500 transition duration-300">
              <div className="h-40 w-40 rounded-full bg-gray-200 mx-auto mb-4 border-4 border-yellow-500"></div>
              <h3 className="text-xl font-semibold mb-1">Vaibhav Chauhan</h3>
              <p className="text-yellow-600 mb-3 font-medium">Project Lead</p>
              <p className="text-gray-500 text-sm">Leading the development and implementation of the entire project from Delhi.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 hover:border-yellow-500 transition duration-300">
              <div className="h-40 w-40 rounded-full bg-gray-200 mx-auto mb-4 border-4 border-yellow-500"></div>
              <h3 className="text-xl font-semibold mb-1">Munna Das</h3>
              <p className="text-yellow-600 mb-3 font-medium">Developer</p>
              <p className="text-gray-500 text-sm">Focusing on backend development and database management from Kolkata.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 hover:border-yellow-500 transition duration-300">
              <div className="h-40 w-40 rounded-full bg-gray-200 mx-auto mb-4 border-4 border-yellow-500"></div>
              <h3 className="text-xl font-semibold mb-1">Vikash Thakur</h3>
              <p className="text-yellow-600 mb-3 font-medium">Developer</p>
              <p className="text-gray-500 text-sm">Specializing in frontend development and UI/UX design from Mumbai.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 hover:border-yellow-500 transition duration-300">
              <div className="h-40 w-40 rounded-full bg-gray-200 mx-auto mb-4 border-4 border-yellow-500"></div>
              <h3 className="text-xl font-semibold mb-1">Himanshu Shingh</h3>
              <p className="text-yellow-600 mb-3 font-medium">Developer</p>
              <p className="text-gray-500 text-sm">Working on API integrations and system architecture from Bangalore.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 hover:border-yellow-500 transition duration-300">
              <div className="h-40 w-40 rounded-full bg-gray-200 mx-auto mb-4 border-4 border-yellow-500"></div>
              <h3 className="text-xl font-semibold mb-1">Durgesh Nikam</h3>
              <p className="text-yellow-600 mb-3 font-medium">Developer</p>
              <p className="text-gray-500 text-sm">Managing testing, deployment, and technical documentation from Pune.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-4">Key Features</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-yellow-600 mb-4">
                <FaBuilding className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Listings</h3>
              <p className="text-gray-600">Comprehensive property listings across major Indian cities with detailed information and virtual tours.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-yellow-600 mb-4">
                <FaGlobe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
              <p className="text-gray-600">Powerful search and filtering options to find properties in any Indian city based on your preferences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-yellow-600 mb-4">
                <FaMobileAlt className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Responsive</h3>
              <p className="text-gray-600">Fully responsive design optimized for all Indian mobile networks and devices.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-yellow-600 mb-4">
                <FaShieldAlt className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p className="text-gray-600">Robust security measures compliant with Indian data protection laws to ensure safe transactions.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technologies */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-4">Technologies Used</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-black mb-4">Frontend</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    React.js for the user interface
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    Redux for state management
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    Tailwind CSS for styling
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    Vite for fast development
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-black mb-4">Backend</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    Node.js for server-side logic
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    Express.js for API endpoints
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    MongoDB for database storage
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                    JWT for authentication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join DreamHeaven today and discover the perfect property across India starting from just ₹25 lakhs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/search" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-lg transition duration-300 no-underline">
              Browse Properties
            </a>
            <a href="/sign-up" className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 border-2 border-white rounded-lg transition duration-300 no-underline">
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
