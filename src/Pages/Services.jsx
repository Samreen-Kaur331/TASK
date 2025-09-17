import React from "react";
import { FaHome, FaTools, FaHandshake, FaPaintRoller } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
      <section className="bg-blue-100 text-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">
            At <span className="font-semibold text-blue-600">Homing</span>, we make your dream home a reality 
            with reliable and professional services.
          </p>
        </div>
      </section>

   
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
       
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaHome className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Property Consultation</h3>
            <p className="text-gray-700">
              Expert advice to help you find your perfect home or property.
            </p>
          </div>

         
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaTools className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Renovation & Repairs</h3>
            <p className="text-gray-700">
              From small fixes to major renovations, we’ve got you covered.
            </p>
          </div>

       
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaHandshake className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Legal Assistance</h3>
            <p className="text-gray-700">
              Smooth property documentation and legal support for hassle-free ownership.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <FaPaintRoller className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interior Designing</h3>
            <p className="text-gray-700">
              Modern and elegant designs to make your house feel like home.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
