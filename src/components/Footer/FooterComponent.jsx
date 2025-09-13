
"use client";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">CityHotelManager</h3>
          <p className="text-gray-400">
            Connecting travelers to the best hotels and services in Cameroon. 
            Providing exceptional hospitality experiences through innovation and customer care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/hotels" className="hover:text-white transition">Hotels</a></li>
            <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: <a href="mailto:info@cityhotelmanager.com" className="hover:text-white transition">info@cityhotelmanager.com</a></li>
            <li>Phone: <a href="tel:+237699123456" className="hover:text-white transition">+237 699 123 456</a></li>
            <li>Address: Douala, Cameroon</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h4 className="font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-3">Subscribe to our newsletter for latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-md text-gray-900 flex-1"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition"><Github /></a>
            <a href="#" className="hover:text-white transition"><Linkedin /></a>
            <a href="#" className="hover:text-white transition"><Instagram /></a>
            <a href="#" className="hover:text-white transition"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CityHotelManager. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;

