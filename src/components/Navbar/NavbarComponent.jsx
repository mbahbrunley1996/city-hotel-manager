
"use client";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-lg px-8 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <h1 className="font-extrabold text-2xl tracking-wide text-white drop-shadow-md">
        HotelManager
      </h1>

      {/* Links */}
      <div className="flex gap-8">
        <Link 
          href="/" 
          className="text-white hover:text-yellow-300 transition duration-300 font-medium"
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="text-white hover:text-yellow-300 transition duration-300 font-medium"
        >
          About Us
        </Link>
        <Link 
          href="/career" 
          className="text-white hover:text-yellow-300 transition duration-300 font-medium"
        >
          Careers
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-yellow-300 transition duration-300 font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavbarComponent;