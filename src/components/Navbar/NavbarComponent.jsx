"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-lg px-6 py-4">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-extrabold text-2xl text-white tracking-wide">
          CityHotelManager
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="text-white hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition">
            About Us
          </Link>
          <Link href="/career" className="text-white hover:text-yellow-300 transition">
            Careers
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <div className="border rounded-md border-gray-300 shadow">
            <ModeToggle />
          </div>
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-blue-700 px-3 py-1 rounded-md">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-blue-800 text-white rounded-lg py-4 shadow-lg animate-slideDown">
          <Link href="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/career" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Careers
          </Link>
          <Link href="/contact" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <div className="flex items-center gap-3 mt-3">
            <div className="border rounded-md border-gray-300 text-black shadow">
              <ModeToggle />
            </div>
            <SignedOut>
              <SignInButton>
                <button className="bg-white text-blue-700 px-3 py-1 rounded-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
