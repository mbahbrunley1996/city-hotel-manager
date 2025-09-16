

// import NavbarComponent from "@/components/Navbar/NavbarComponent";
// import CardComponent from "@/components/Card/CardComponent";
// import { cities } from "@/utils/cities";

// const CitiesPage = ({ params }) => {
//   const cities = cities.find((c) => c.slug === params.slug);

//   if (!city) return <p>City not found</p>;

//   return (
//     <>
//       {/* ✅ Navbar added here */}
//       <NavbarComponent />

//       <div className="p-6">
//         <h1 className="text-3xl font-bold mb-4 text-blue-800">
//           {city.name} Hotels
//         </h1>

//         {/* ✅ Hotels listing */}
//         <CardComponent items={cities.hotels} type="hotel" />
//       </div>
//     </>
//   );
// };



// import Link from "next/link";

// {/* Inside your map of hotels */}
// {hotelsItem.hotels.map((hotel) => (
//   <div key={hotel.slug} className="border p-4 rounded-lg">
//     <img src={hotel.image} alt={hotel.title} className="w-full h-48 object-cover" />
//     <h2 className="text-xl font-bold mt-2">{hotel.title}</h2>
//     <p className="text-gray-600">{hotel.location}</p>
//     <p className="text-green-600 font-bold">${hotel.price}</p>

//     <div className="flex justify-between mt-4">
//       <Link
//         href={`/cities/${hotelsItem.slug}/${hotel.slug}`} // ← the nested slug route
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Hotel Details
//       </Link>
//     </div>
//   </div>
// ))}
