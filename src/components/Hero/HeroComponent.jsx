"use client";
import React from "react";

const HeroComponent = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/yaounde-cameroon-june-6-2022-600nw-2435598699.jpg"
          alt="Luxury hotel view"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 py-10 md:py-16">
        {/* Headline */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Discover & Book Your Perfect Stay
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Explore the top-rated cities and hotels across Cameroon. Compare prices, check availability,
            and plan your next trip seamlessly.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-blue-700 text-gray-300 rounded-xl shadow-lg p-6 md:p-8">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-end">
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-semibold mb-1">Country / City</label>
              <input
                type="text"
                placeholder="Enter country or city"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Check-in</label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Check-out</label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Guests</label>
              <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <div className="md:col-span-5 flex justify-center mt-2">
              <button
                type="button"
                className="w-full md:w-auto bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Search Hotels
              </button>
            </div>
          </form>
          <p className="text-sm text-center mt-4 text-gray-300">
            Secure booking with instant confirmation. No hidden fees. Explore cities and hotels to find your ideal stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;


