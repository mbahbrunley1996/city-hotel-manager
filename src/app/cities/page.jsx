

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