import React from "react";
import villa from "../assets/villa.jpg";
import apartment from "../assets/apartment.jpg";
import farmhouse from "../assets/farmhouse.jpg";
import office from "../assets/office.jpg";
import heroImage from "../assets/home-hero.jpg"; 

const Home = () => {

  const properties = [
    { id: 1, name: "Luxury Villa", price: "₹1.5 Cr", image: villa, location: "Gurgaon" },
    { id: 2, name: "Modern Apartment", price: "₹65 Lakh", image: apartment, location: "Noida" },
    { id: 3, name: "Farmhouse Retreat", price: "₹90 Lakh", image: farmhouse, location: "Manesar" },
    { id: 4, name: "Office Space", price: "₹40 Lakh", image: office, location: "Delhi" },
  ];

  return (
    <div>
     
      <div className="relative w-full h-[500px]">
        <img
          src={heroImage}
          alt="Dream Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start pl-16">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl border border-blue-200 max-w-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Find Your Dream Home with <span className="text-blue-600">Homing</span>
            </h2>
            <p className="text-blue-500 font-semibold mb-4">
              🏡 Trusted Real Estate Deals Near You
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition-shadow">
              Explore Properties
            </button>
          </div>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-gray-800 font-bold mb-3">{property.price}</p>
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
