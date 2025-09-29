
// "use client";

// import React from "react";
// import { useParams } from "next/navigation";
// import { destinations } from "@/utils/destinations";
// import Image from "next/image";

// export default function HotelPage() {
//   const { slug, hotelSlug } = useParams();

//   console.log("slug param:", slug);
//   console.log("hotelSlug param:", hotelSlug);
//   console.log(
//     "All destination slugs:",
//     destinations.map((d) => d.slug)
//   );

//   const city = destinations.find(
//     (c) => c.slug.toLowerCase() === slug.toLowerCase()
//   );

//   if (!city) {
//     return <p className="p-5 text-red-600">City not found</p>;
//   }

//   const hotel = city.hotels.find(
//     (h) => h.slug.toLowerCase() === hotelSlug.toLowerCase()
//   );

//   if (!hotel) {
//     return <p className="p-5 text-red-600">Hotel not found</p>;
//   }

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-bold mb-2">{hotel.title}</h1>
//       <p className="mb-4">{hotel.description}</p>

//       <h2 className="text-xl font-semibold mb-2">Rooms</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {hotel.rooms?.map((room, idx) => (
//           <div key={idx} className="relative w-full h-64">
//             <Image
//               src={room}
//               alt={`Room ${idx + 1}`}
//               fill
//               className="rounded object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useParams } from 'next/navigation';
// import Link from 'next/link';
// import { destinations } from '@/utils/hotelData';

// const HotelDetailsPage = () => {
//   const params = useParams();
//   const { slug, hotelSlug } = params;

//   // Find the city first by iterating through destinations and then cities
//   let city = null;
//   for (const region of destinations) {
//     city = region.cities.find((c) => c.slug === slug);
//     if (city) break;
//   }

//   // Handle the case where the city is not found
//   if (!city) {
//     return <p>City not found.</p>;
//   }

//   // Find the specific hotel within the found city
//   const hotel = city.hotels.find((h) => h.hotelSlug === hotelSlug);

//   // Handle the case where the hotel is not found
//   if (!hotel) {
//     return <p>Hotel not found.</p>;
//   }

//   return (
//     <div className="p-6">
//       <Link href={`/cities/${slug}`} className="text-blue-600 underline">
//         ← Back to {city.name}
//       </Link>
//       <div>
//         <h1 className="text-3xl font-bold mt-4">{hotel.name}</h1>
//         <img src={hotel.image} alt={hotel.name} className="w-full h-80 object-cover mt-4 rounded-lg" />
//         <p className="mt-2 text-gray-600">{hotel.description}</p>
//         <p className="mt-2 font-bold text-green-600">{hotel.price}</p>
//         <p className="mt-4">
//           **Amenities:** {hotel.amenities.join(', ')}
//         </p>
//         <p className="mt-2">
//           ⭐ {hotel.rating} ({hotel.reviews} reviews)
//         </p>
//         <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HotelDetailsPage;


// This is a hypothetical component that lists the hotels in a city.
// You need to find and update this component in your project.

// HotelDetailsPage.js
// app/cities/[slug]/[hotelSlug]/page.jsx

// app/cities/[slug]/[hotelSlug]/page.jsx

// 'use client';

// import { useParams } from 'next/navigation';
// import Link from 'next/link';
// import { destinations } from '@/utils/destinations';
// import FooterComponent from '@/components/Footer/FooterComponent';

// const HotelDetailsPage = () => {
//   const params = useParams();
//   const { slug, hotelSlug } = params;

//   console.log('🔍 Debug Info:');
//   console.log('City slug:', slug);
//   console.log('Hotel slug:', hotelSlug);
//   console.log('Available cities:', destinations.flatMap(region => region.cities).map(c => ({ name: c.name, slug: c.slug })));

//   const city = destinations
//     .flatMap(region => region.cities)
//     .find(c => c.slug === slug);

//   console.log('Found city:', city ? { name: city.name, slug: city.slug } : 'NOT FOUND');

//   if (!city) {
//     return (
//       <div className="p-6">
//         <p className="text-red-600 text-xl">City not found: "{slug}"</p>
//         <p className="mt-2">Available cities:</p>
//         <ul className="list-disc ml-6">
//           {destinations.flatMap(region => region.cities).map(c => (
//             <li key={c.slug}>{c.name} ({c.slug})</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   console.log('Hotels in city:', city.hotels.map(h => ({ name: h.name, slug: h.slug })));

//   const hotel = city.hotels.find(h => h.slug === hotelSlug);

//   console.log('Found hotel:', hotel ? { name: hotel.name, slug: hotel.slug } : 'NOT FOUND');

//   if (!hotel) {
//     return (
//       <div className="p-6">
//         <Link href={`/cities/${slug}`} className="text-blue-600 underline">
//           ← Back to {city.name}
//         </Link>
//         <p className="text-red-600 text-xl mt-4">Hotel not found: "{hotelSlug}"</p>
//         <p className="mt-2">Available hotels in {city.name}:</p>
//         <ul className="list-disc ml-6">
//           {city.hotels.map(h => (
//             <li key={h.slug}>{h.name} ({h.slug})</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   return (
//     <>
//     <div className="p-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-lg text-white">
     
//       <Link href={`/cities/${slug}`} className="text-white underline font-bold">
//         ← Back to {city.name}
//       </Link>
      
//         <h1 className="text-3xl font-bold">{hotel.name}</h1>
      
//        <div className="mt-4 bg-white"> 
//         <img src={hotel.image} alt={hotel.name} className="w-full h-100 object-cover mt-4 rounded-lg" />
//         <p className="mt-2 ml-2 text-gray-600 flex flex-wrap gap-4 shadow-md transition-transform">{hotel.gallery}</p> 
//          <div className='flex flex-col p-6 items-start'>
//         <p className="mt-2 text-gray-600">{hotel.description}</p>
//         <p className="mt-2 font-bold text-green-600">{hotel.price}</p>
//         <p className="mt-4 text-gray-600">
//           **Amenities:** {hotel.amenities}
//         </p>
//         <p className="mt-2">
//           ⭐ ⭐ ⭐ ⭐ ⭐ {hotel.rating} ({hotel.reviews} reviews)
//         </p>
//         <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
//           Book Now 
//         </button>
//         </div>
//       </div>
//     </div>
//     <FooterComponent  />
//     </>
//   );
// };

// export default HotelDetailsPage;


'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { destinations } from '@/utils/destinations';
import FooterComponent from '@/components/Footer/FooterComponent';
import Slider from 'react-slick';

const HotelDetailsPage = () => {
  const { slug: citySlug, hotelSlug } = useParams();

  const city = destinations
    .flatMap(region => region.cities)
    .find(c => c.slug === citySlug);

  if (!city) {
    return <div className="p-6 text-red-600">City not found</div>;
  }

  const hotel = city.hotels.find(h => h.slug === hotelSlug);

  if (!hotel) {
    return <div className="p-6 text-red-600">Hotel not found</div>;
  }

  return (
    <>
      <div className="p-6">
        <Link href={`/cities/${citySlug}`} className="text-blue-600 underline">
          ← Back to {city.name}
        </Link>
        <h1 className="text-3xl font-bold mt-4">{hotel.name}</h1>

        {/* main image */}
        <img src={hotel.image} alt={hotel.name} className="w-full h-72 object-cover rounded-lg mt-4" />

        {/* gallery */}
        {hotel.gallery?.length > 0 && (
          <div className="overflow-x-auto mt-4">
            <div className="mt-6">
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={4000}
    className="rounded-lg overflow-hidden"
  >
    {hotel.gallery.map((imgUrl, idx) => (
      <div key={idx}>
        <img
          src={imgUrl}
          alt={`${hotel.name} image ${idx + 1}`}
          className="w-full h-110 object-cover"
        />
      </div>
    ))}
  </Slider>
</div>
          </div>)}

        <p className="mt-4">{hotel.description}</p>
        <p className="mt-2 font-bold text-green-600">{hotel.price}</p>
        <p className="mt-2">Amenities: {hotel.amenities.join(', ')}</p>
        <p className="mt-2">⭐ {hotel.rating} ({hotel.reviews} reviews)</p>

        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
          Book Now
        </button>
      </div>
      <FooterComponent />
    </>
  );
};

export default HotelDetailsPage;
