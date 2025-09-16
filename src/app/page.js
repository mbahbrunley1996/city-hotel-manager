'use client'
import CardComponent from "@/components/Cards/CardComponent";
import HeroComponent from "@/components/Hero/HeroComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Image from "next/image";
import { cities } from "@/utils/data";
import { useState } from "react";
import FooterComponent from "@/components/Footer/FooterComponent";


export default function Home() {



const [activeTab, setActiveTab] = useState("region");

  // const region = ["Littoral","Centre","West","North West","South West","East","Far North","Adamawa","North"];
  // const cities =["Douala","Yaounde","Buea","Limbe","Kumba","Bamenda","Bafoussam","Dschang","Kribi","Ebolowa","Bertoua","Garoua","Maroua","Ngaoundere"];
  // const hotels =["Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise"];

let dataToDisplay = [];
 if (activeTab === "region")
    dataToDisplay = ["Littoral","Centre","West","North West","South West","East","Far North","Adamawa","North"];
  if (activeTab === "cities") 
     dataToDisplay =["Douala","Yaounde","Buea","Limbe","Kumba","Bamenda","Bafoussam","Dschang","Kribi","Ebolowa","Bertoua","Garoua","Maroua","Ngaoundere"];
  if (activeTab === "hotels")
     dataToDisplay =["Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise","Hotel La Falaise"];




  return (
    <>
    <NavbarComponent  />
    <HeroComponent />
    <CardComponent items={cities} type="city" />
    <div className="max-w-7xl mx-auto">
       <div className="ml-0 text-3xl py-6 font-bold">
           <h1>Why CityHotelManager ?</h1>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-6 md:px-0 py-12">

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

       <div className=" relative flex justify-center border border-gray-300 rounded-xl mx-0 cursor-pointer overflow-hidden"> 
        <div className="flex flex-col justify-center items-center mt-30 w-[0%] relative ml-9">
          <button className="p-10 bg-yellow-400 rounded-full w-32 h-32 flex justify-center items-center"></button>
        </div>
        <div className="z-10 flex flex-col justify-center items-center w-[70%] gap-10 ml-0 text-3xl rounded-l-full rounded-r-full px-10 py-0 font-bold bg-blue-600">
            <h1 className="text-white font-bold">Hey mbah, want to feel at <br/> home on your next <br/> adventure?</h1>
            <button className="text-sm text-blue-600 bg-white py-3  w-[50%] rounded ">Discover holidays rentals</button>
        </div>
        <div>
          <Image src="/icon images/image copy 4.png" alt="whyus" width={600} height={400} />
        </div>
       </div>

       <div className="max-w-7xl mx-auto ml-0 py-6 space-y-5">
          <div className="text-3xl font-bold flex ">Popular with travellers from Cameroon</div>    
       </div>
    </div>

      <div className="py-6 max-w-7xl mx-auto">
      {/* 4️⃣ Tab buttons */}
      <div className="flex gap-4 mb-6">
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
          className={`px-4 py-2 rounded ${
            activeTab === "cities" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Cities
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          className={`px-4 py-2 rounded ${
            activeTab === "hotels" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Hotels
        </button>
      </div>

      {/* 5️⃣ Horizontal List */}
      <div className="flex gap-9 flex-wrap">   {/* 👈 stacks horizontally */}
        {dataToDisplay.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded hover:bg-gray-200 cursor-pointer min-w-[150px] text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    <FooterComponent />
    </>
  );
}
