'use client';
import { useState, useMemo } from "react";
import Image from "next/image";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import HeroComponent from "@/components/Hero/HeroComponent";
import CardComponent from "@/components/Cards/CardComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import { destinations } from "@/utils/destinations";
import { FaHeart } from 'react-icons/fa';
import { useStoreCart } from '@/store/cart.store'; // ✅ named import now


export default function Home() {
  const [activeTab, setActiveTab] = useState("region");


  const toggleItem = useStoreCart((state) => state.toggleItem);
const cartItems = useStoreCart((state) => state.cartItems);

  // 1️⃣ Extract cities from destinations and create data for display
  const cities = useMemo(() => 
    destinations.flatMap(region => 
      region.cities.map(city => ({
        ...city,
        region: region.region
      }))
    ), []
  );
  
  const regions = [...new Set(destinations.map(d => d.region))];
  const cityNames = cities.map(c => c.name);

  // 2️⃣ Flatten all hotels from all cities (using destinations data for better images)
  const allHotels = useMemo(
    () =>
      destinations.flatMap(region =>
        region.cities.flatMap(city =>
          city.hotels.map(hotel => ({
            ...hotel,
            title: hotel.name, // Map 'name' to 'title' for consistency
            location: city.name,
            city: city.name,
            region: region.region,
          }))
        )
      ),
    []
  );

  // 3️⃣ Determine which data to display
  let dataToDisplay = [];
  if (activeTab === "region") dataToDisplay = regions;
  if (activeTab === "cities") dataToDisplay = cityNames;
  if (activeTab === "hotels") dataToDisplay = allHotels;
  // const region = ["Littoral","Centre","West","North West","South West","East","Far North","Adamawa","North"];
  // const cities =["Douala","Yaounde","Buea","Limbe","Kumba","Bamenda","Bafoussam","Dschang","Kribi","Ebolowa","Bertoua","Garoua","Maroua","Ngaoundere"];
  // const hotels =["Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise"];



  return (
    <>
    <NavbarComponent  />
    <HeroComponent />
    <CardComponent items={cities} type="city" />
     <div className="max-w-7xl mx-auto">
      {/* Title Section (Original Desktop Format) */}
      <div className="ml-0 text-3xl py-6 font-bold">
        <h1>Why CityHotelManager ?</h1>
      </div>

      {/* Grid of Reasons (Responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-6 md:px-0 py-12">
        {/* Individual Cards (Original Desktop Format) */}
        <div className="flex h-[100%] rounded-xl py-4 flex-col border border-gray-300 shadow-md hover:bg-gray-300 hover:text-[#000] hover:scale-101 duration-300 transition ease-in-out justify-center gap-6 px-4">
          <Image src="/icon images/image.png" alt="whyus" width={75} height={35} />
          <ul className="flex flex-col w-full h-[50%] justify-center text-lg">
            <li className="font-bold">Book now, pay at the property</li>
            <li className="text-sm">FREE cancellation on most rooms</li>
          </ul>
        </div>
        <div className="flex h-[100%] rounded-xl py-4 flex-col border border-gray-300 shadow-md hover:bg-gray-300 hover:text-[#000] hover:scale-101 duration-300 transition ease-in-out justify-center gap-6 px-4">
          <Image src="/icon images/image copy.png" alt="whyus" width={75} height={35} />
          <ul className="flex flex-col justify-center text-lg">
            <li className="font-bold">1M+ reviews from fellow travellers</li>
            <li className="text-sm">Get trusted information from guests like you</li>
          </ul>
        </div>
        <div className="flex h-[100%] rounded-xl py-4 flex-col border border-gray-300 shadow-md hover:bg-gray-300 hover:text-[#000] hover:scale-101 duration-300 transition ease-in-out justify-center gap-6 px-4">
          <Image src="/icon images/image copy 2.png" alt="whyus" width={75} height={35} />
          <ul className="flex flex-col justify-center text-lg">
            <li className="font-bold">2+ million properties nationwide</li>
            <li className="text-sm">Best, hotels in every region of the nation</li>
          </ul>
        </div>
        <div className="flex h-[100%] rounded-xl py-4 flex-col border border-gray-300 shadow-md hover:bg-gray-300 hover:text-[#000] hover:scale-101 duration-300 transition ease-in-out justify-center gap-6 px-4">
          <Image src="/icon images/image copy 3.png" alt="whyus" width={75} height={35} />
          <ul className="flex flex-col justify-center text-lg">
            <li className="font-bold">Reliable customer support, 24/7</li>
            <li className="text-sm">We're always here to help you</li>
          </ul>
        </div>
        <div className="flex h-[100%] rounded-xl py-4 flex-col border border-gray-300 shadow-md hover:bg-gray-300 hover:text-[#000] hover:scale-101 duration-300 transition ease-in-out justify-center gap-6 px-4">
          <Image src="/icon images/image copy 4.png" alt="whyus" width={125} height={85} />
          <ul className="flex flex-col justify-center text-lg">
            <li className="font-bold">Nationwide tour</li>
            <li className="text-sm">We ensure your national tour is guaranteed</li>
          </ul>
        </div>
      </div>

      {/* Call-to-Action Section (Responsive) */}
      <div className="relative flex flex-col md:flex-row justify-center border border-gray-300 rounded-xl mx-0 cursor-pointer overflow-hidden">
        {/* Responsive stacking: flex-col for mobile, md:flex-row for desktop */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          {/* Mobile Stacking for the Yellow Button */}
          <div className="flex justify-center items-center w-full md:w-[0%] relative md:ml-9">
            <button className="p-10 bg-yellow-400 rounded-full w-32 h-32 flex justify-center items-center my-6 md:my-0 md:mt-24"></button>
          </div>
          {/* Mobile Stacking for Text and Button */}
          <div className="z-10 flex flex-col justify-center items-center text-center w-full md:w-[70%] gap-5 md:gap-10 py-6 md:py-18 px-10 font-bold bg-blue-600 rounded-xl md:rounded-l-full md:rounded-r-full">
            <h1 className="text-white font-bold text-xl md:text-3xl leading-tight">
              Hey mbah, want to feel at <br /> home on your next <br /> adventure?
            </h1>
            <button className="text-sm text-blue-600 bg-white py-3 w-[50%] rounded">
              Discover holidays rentals
            </button>
          </div>
          {/* Image (Responsive on Mobile) */}
          <div className="w-full md:w-auto flex justify-center items-center py-6 md:py-0">
            <Image src="/icon images/image copy 4.png" alt="whyus" width={600} height={400} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Popular Travellers Section (Original Desktop Format) */}
      <div className="max-w-7xl mx-auto ml-0 py-6 space-y-5">
        <div className="text-3xl font-bold flex ">
          Popular with travellers from Cameroon
        </div>
      </div>
    </div>
  {/* Tabs */}
      <div className="py-6 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setActiveTab("region")}
            className={`px-4 py-2 rounded ${
              activeTab === "region" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Regions
          </button>
          <button
            onClick={() => setActiveTab("cities")}
            className={`px-4 py-2 rounded text-gray-500 ${
              activeTab === "cities" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Cities
          </button>
          <button
            onClick={() => setActiveTab("hotels")}
            className={`px-4 py-2 rounded text-gray-500 ${
              activeTab === "hotels" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Hotels
          </button>
        </div>

        {/* Data Display */}
        {activeTab !== "hotels" ? (
          <div className="flex flex-wrap gap-4 text-gray-500">
            {dataToDisplay.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-white rounded shadow hover:bg-gray-200 cursor-pointer min-w-[150px] text-black text-center"
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dataToDisplay.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white rounded shadow hover:shadow-lg cursor-pointer text-black transition p-4 flex flex-col relative"
              >
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  width={400}
                  height={200}
                  className="rounded object-cover w-full text-black h-40"
                />
             <button
  onClick={() => toggleItem(hotel)}
  className={`absolute top-5 right-5 p-3 bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition ${
    cartItems.some(item => item.id === hotel.id)
      ? 'text-red-500'
      : 'text-gray-500'
  }`}
>

  <FaHeart size={20} />
</button>

                <h3 className="text-lg font-semibold mt-2">{hotel.title}</h3>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <p className="text-sm font-bold">{hotel.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <FooterComponent />
    </>
  );
}

