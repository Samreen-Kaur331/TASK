import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
   <footer className="bg-gray-500 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">MyStore</h2>
          <p className="text-sm">
            Your one-stop shop for fashion and lifestyle. 
            Quality products at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Get Started </h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/get house" className="hover:text-white">Get House</Link></li>
            <li><Link to="/rent house " className="hover:text-white"></Link>Rent House </li>
            <li><Link to="/support" className="hover:text-white">Support</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p>Email: support@mystoreHoming.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: New Delhi, India</p>
        </div>
      </div>
{/* Social Media Icons */}
<div className="flex justify-center space-x-4 mt-6">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-gray-300 hover:text-white text-xl" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-gray-300 hover:text-white text-xl" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-gray-300 hover:text-white text-xl" />
  </a>
  <a href="https://Whatsapp.com" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp className="text-gray-300 hover:text-white text-xl" />
  </a>
</div>

     
      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm">
        <p>© {new Date().getFullYear()} Homing. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
