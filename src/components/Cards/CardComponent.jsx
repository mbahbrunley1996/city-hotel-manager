
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import useCartStore from "@/store/cartStore";

// const CardComponent = ({ items, type }) => {
//   const addToCart = useCartStore((state) => state.addToCart);

//   if (!items || items.length === 0) return <p>No items found.</p>;

//   return (
//     <>
//       {/* 🌍 Welcome Section */}
//       <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center bg-blue-800 text-white overflow-hidden">
//         {/* Background image */}
//         <Image
//           src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
//           alt="Cameroon cityscape"
//           fill
//           className="object-cover opacity-70"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-blue-900/50"></div>

//         {/* Text Content */}
//         <div className="relative z-10 max-w-3xl px-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
//             Welcome to Cameroon
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-200">
//             Discover the best cities and find the perfect hotel for your stay.
//             From vibrant Douala to scenic Kribi, your adventure begins here.
//           </p>
//           <Link
//             href="#explore-hotels"
//             className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
//           >
//             Start Exploring
//           </Link>
//         </div>
//       </div>

//       {/* 🌆 Cities / Hotels Grid */}
//       <div
//         id="explore-hotels"
//         className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 py-12"
//       >
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition p-3"
//           >
//             <img
//               src={item.image}
//               alt={item.title || item.name}
//               className="rounded-lg object-cover w-full h-80"
//             />

//             <h2 className="mt-3 font-bold text-lg">{item.title || item.name}</h2>
//             {item.location && <p className="text-gray-600">{item.location}</p>}
//             {item.price && <p className="font-semibold">{item.price}</p>}
//             {item.reviewSummary && (
//               <p className="text-gray-600">{item.reviewSummary} reviews</p>
//             )}
//             {item.details && <p className="text-gray-600">{item.details}</p>}

//             {type === "city" && (
//               <Link
//                 href={`/cities/${item.slug}`}
//                 className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
//               >
//                 View Hotels
//               </Link>
//             )}

//             {type === "hotel" && (
//               <button
//                 onClick={() => addToCart(item)}
//                 className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CardComponent;

"use client";
import Link from "next/link";

const CardComponent = ({ items, type }) => {
  if (!items || items.length === 0)
    return <p className="text-center py-10">No cities found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 py-10">
      {type === "city" && (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Our Cities</h2>
          <p className="text-gray-600 mt-2">
            Discover the best hotels in Cameroon’s top cities.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-full opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg font-semibold text-sm z-10">
              {item.region}
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-xl object-cover w-full h-80"
            />
            <div className="p-4 text-left">
              <h3 className="font-bold text-gray-700 text-xl mb-2">{item.name}</h3>
              <p className="text-gray-500 mb-3">{item.location}</p>
              <Link
                href={`/cities/${item.slug}`}
                className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                View Hotels
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
