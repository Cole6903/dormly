import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm">123 PG Broker Lane, Cityville</p>
            <p className="text-sm">Email: info@dormly.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-white transition duration-300">Home</a></li>
              <li><a href="/listings" className="text-sm hover:text-white transition duration-300">Listings</a></li>
              <li><a href="/about" className="text-sm hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}