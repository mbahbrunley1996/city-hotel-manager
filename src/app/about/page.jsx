
"use client";
import FooterComponent from "@/components/Footer/FooterComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Image from "next/image";
import TestimonialsSlider from "@/components/Testimonials/TestimonialsSlider";

const page = () => {
  return (
    <>
      <NavbarComponent />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
       <section
  className="relative flex flex-col items-center justify-center text-center text-white bg-blue-900 py-20 px-4
             h-[50vh] md:h-[80vh] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      'url("https://images.pexels.com/photos/31231176/pexels-photo-31231176.jpeg")',
  }}
>
  <div className="bg-black/40 absolute inset-0"></div> {/* optional overlay for better text contrast */}
  <div className="relative z-10 px-4">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
      About Us
    </h1>
    <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
      We connect travelers with the best hotels, resorts, and vacation
      rentals across the world.
    </p>
  </div>
</section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mission is to make travel simple, enjoyable, and accessible to
              everyone. We aim to provide a seamless experience from booking to
              check-in, ensuring that your journey is memorable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are passionate about hospitality and innovation. Every feature
              we build is focused on making your travel effortless and
              rewarding.
            </p>
          </div>
          <div className="relative h-80 w-full">
            <img
              src="/mission.png"
              alt="Our team working together"
              className="object-cover rounded-xl shadow-lg w-full h-full"
            />
          </div>
        </section>

        {/* Office Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 w-full">
              <img
                src="/loyalty.png"
                alt="Receptionist at desk"
                className="rounded-xl object-cover shadow-lg w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Hospitality at Its Best</h2>
              <p className="text-gray-700 leading-relaxed">
                Our friendly reception team is here to guide you through every
                step of your journey. Whether you’re booking for leisure or
                business, our support ensures comfort and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Inspired By</h3>
          <ul className="list-disc list-inside text-gray-700 inline-block text-left">
            <li>Booking.com — global scale, seamless UX</li>
            <li>Best practices in hotel & travel web design</li>
            <li>Modern UI frameworks with Next.js & TailwindCSS</li>
          </ul>
        </section>

        {/* ✅ Testimonials Section */}
        <section className="bg-white py-20">
          <TestimonialsSlider />
        </section>
      </div>
      <FooterComponent />
    </>
  );
};

export default page;