
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { destinations } from "@/utils/destinations";
import Image from "next/image";

export default function HotelPage() {
  const { slug, hotelSlug } = useParams();

  console.log("slug param:", slug);
  console.log("hotelSlug param:", hotelSlug);
  console.log(
    "All destination slugs:",
    destinations.map((d) => d.slug)
  );

  const city = destinations.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!city) {
    return <p className="p-5 text-red-600">City not found</p>;
  }

  const hotel = city.hotels.find(
    (h) => h.slug.toLowerCase() === hotelSlug.toLowerCase()
  );

  if (!hotel) {
    return <p className="p-5 text-red-600">Hotel not found</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-2">{hotel.title}</h1>
      <p className="mb-4">{hotel.description}</p>

      <h2 className="text-xl font-semibold mb-2">Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hotel.rooms?.map((room, idx) => (
          <div key={idx} className="relative w-full h-64">
            <Image
              src={room}
              alt={`Room ${idx + 1}`}
              fill
              className="rounded object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}