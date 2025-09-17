import React from 'react'

const About = () => {
 
  return (
    <div className="bg-gray-50 min-h-screen">
    

      <section className="bg-blue-200 text-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About Homing</h1>
          <p className="text-lg">
            Your trusted partner in finding, buying, renting, and managing homes. 
            We make real estate simple and reliable.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Homing was founded with a vision to make property search easier, faster, 
          and more transparent. We believe everyone deserves a place they can call home, 
          and our mission is to connect people with their dream properties. 
          From cozy apartments to luxurious villas, every listing is carefully verified 
          to ensure trust and quality.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To simplify the process of buying, selling, and renting properties while 
              ensuring transparency, trust, and customer satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted real estate platform worldwide by combining 
              technology, expertise, and personalized services for every customer.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">Trust</h4>
            <p className="text-gray-700">
              Every property is verified to ensure reliability and peace of mind.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">Innovation</h4>
            <p className="text-gray-700">
              We use modern technology to provide smarter property solutions.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-2">Customer First</h4>
            <p className="text-gray-700">
              Our clients’ satisfaction is at the core of everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


export default About
