
"use client";
import FooterComponent from "@/components/Footer/FooterComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Image from "next/image";

const page = () => {
  return (
    <>
      <NavbarComponent />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section
          className="relative bg-blue-900 text-white py-20 text-center"
          style={{
            background:
              'url("https://media.istockphoto.com/id/1296004095/photo/caucasian-businessman-wearing-formal-suit-talking-to-colleague-in-the-office.webp?s=2048x2048&w=is&k=20&c=xSuOwjTLkHbK30_rtJOkVkPBRw_pJLApxgjBxjjTv4U=")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            We connect travelers with the best hotels, resorts, and vacation
            rentals across the world.
          </p>
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
              src="/image.png"
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
                src="/image copy.png"
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
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer 1"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic">
                  “An unforgettable stay! The staff went above and beyond.”
                </p>
                <h4 className="mt-4 font-semibold">John D., USA</h4>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer 2"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic">
                  “Beautiful rooms and excellent service. Highly recommend.”
                </p>
                <h4 className="mt-4 font-semibold">Sofia L., Spain</h4>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt="Customer 3"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic">
                  “I felt like royalty during my entire visit.”
                </p>
                <h4 className="mt-4 font-semibold">Liam O., Ireland</h4>
              </div>
              {/* Testimonial 4 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Customer 4"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic">
                  “Everything from booking to checkout was seamless.”
                </p>
                <h4 className="mt-4 font-semibold">Anna P., Germany</h4>
              </div>
              {/* Testimonial 5 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/90.jpg"
                  alt="Customer 5"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic">
                  “World-class service! I’ll definitely return.”
                </p>
                <h4 className="mt-4 font-semibold">Marco R., Italy</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
};

export default page;