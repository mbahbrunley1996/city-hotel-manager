"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { cities } from "@/utils/data";
import { motion } from "framer-motion";
import CardComponent from "@/components/Cards/CardComponent";

const HeroComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Only city/region input filters CardComponent
  const filteredCities = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="relative sm:min-h-[60vh] flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://www.shutterstock.com/image-photo/yaounde-cameroon-june-6-2022-600nw-2435598699.jpg"
            alt="Yaounde cityscape at night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 py-10 md:py-16">
          {/* Headline */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide">
              Find Your Next Stay
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-100 max-w-3xl mx-auto font-light">
              Search deals on hotels, homes, and much more...
            </p>
          </div>

          {/* Full Search Form */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-800 rounded-lg shadow-2xl p-4 md:p-6"
          >
            <form className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 items-end">
              {/* Destination Input (city/region) */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="destination" className="text-sm font-semibold text-white mb-1">
                  Where are you going?
                </label>
                <div className="relative">
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    id="destination"
                    placeholder="Enter a city or region"
                    className="w-full pl-10 pr-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-700 text-white placeholder-gray-300"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                </div>
              </div>

              {/* Check-in Date */}
              <div className="flex flex-col">
                <label htmlFor="checkin" className="text-sm font-semibold text-white mb-1">
                  Check-in
                </label>
                <input
                  type="date"
                  id="checkin"
                  className="w-full px-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-700 text-white"
                />
              </div>

              {/* Check-out Date */}
              <div className="flex flex-col">
                <label htmlFor="checkout" className="text-sm font-semibold text-white mb-1">
                  Check-out
                </label>
                <input
                  type="date"
                  id="checkout"
                  className="w-full px-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-700 text-white"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col">
                <label htmlFor="guests" className="text-sm font-semibold text-white mb-1">
                  Guests
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-700 text-white"
                >
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>3 adults</option>
                  <option>4+ adults</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-5 flex justify-center mt-2">
                <button
                  type="button"
                  className="w-full md:w-auto bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
                >
                  <Search size={20} /> Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Display filtered cities in CardComponent */}
      <CardComponent items={filteredCities} type="city" />
    </>
  );
};

export default HeroComponent;
