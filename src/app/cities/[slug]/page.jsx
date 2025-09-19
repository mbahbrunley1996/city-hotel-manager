'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { cities } from '@/utils/data';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import useCartStore from '@/store/cartStore'; // <-- your zustand cart store

const CitiesPage = () => {
  const params = useParams();
  const slug = params.slug;

  // Find the city matching the slug
  const city = cities.find((c) => c.slug === slug);

  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cart);

  if (!city) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">City not found</h1>
      </div>
    );
  }

  return (
    <>
      {/* ✅ Custom Navbar */}
      <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <Link href="/Cities" className="text-lg font-semibold hover:text-yellow-400 transition">
          ⬅ Back to Cities
        </Link>

        <h1 className="font-extrabold text-2xl tracking-wide">
          CityHotelManager 🏨
        </h1>

        <Link href="/cart" className="relative">
          <ShoppingCart size={28} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>

      {/* ✅ Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center bg-blue-800 text-white overflow-hidden">
        <img
          src={city.image}
          alt={`${city.name} city view`}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-blue-900/50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Hotels in {city.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Find the best hotels, comfort, and deals in {city.name}. Your perfect stay awaits!
          </p>
        </div>
      </div>

      {/* ✅ Hotels Section */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 hover:border-gray-300 md:grid-cols-3 gap-6">
 {city.hotels.map((hotel, index) => (
  <div
    key={hotel.slug ? hotel.slug : `hotel-${index}`} // fallback if slug is missing
    className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition relative hover:scale-95"
  >
    {/* Image with Hotel Details button */}
    <div className="relative">
      <img
        src={hotel.image}
        alt={hotel.title}
        className="w-full h-90 object-cover"
      />
      <Link
        href={`/cities/${city.slug}/${hotel.slug}`}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 absolute bottom-0 left-0"
      >
        Hotel Details
      </Link>
    </div>

    {/* Hotel Info */}
    <div className="p-4">
      <h2 className="text-xl font-bold">{hotel.title}</h2>
      <p className="text-gray-500 text-sm">{hotel.location}</p>

      <div className="flex items-center gap-1 mt-1 text-yellow-500">
        <Star size={16} /> 
        <Star size={16} />
        <Star size={16} />
        <Star size={16} />
        <Star size={16} />
        {hotel.reviews}
      </div>

      <p className="text-gray-700 mt-2">{hotel.description}</p>

      <p className="mt-2 text-lg font-semibold text-blue-600">
        ${hotel.price}
      </p>
      <p className="text-sm text-gray-500">{hotel.distance}</p>
      <h1>{hotel.reviewSummary}</h1>
      <h1>{hotel.details}</h1>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(hotel)}
        className="mt-4 px-2 bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
      >
        Add to Cart 🛒
      </button>
    </div>

    <div className="group relative px-4 text-white text-right text-sm">
      <button className="bg-blue-600 hover:bg-blue-700 font-bold text-md transition px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100">
        Holiday Offers
      </button>
      <h4 className="opacity-0 group-hover:opacity-100">{hotel.Roomquality}</h4>
      <p className="opacity-0 group-hover:opacity-100">{hotel.amenities}</p>
      <p className="opacity-0 group-hover:opacity-100">{hotel.cancellation}</p>
      <p className="opacity-0 group-hover:opacity-100">{hotel.PriceDetails}</p>
      <p className="opacity-0 group-hover:opacity-100">
        No prepayments -- all payments at the property
      </p>
    </div>
  </div>
))}
      </div>
    </>
  );
};

export default CitiesPage;