// "use client";
// import Image from "next/image";

// const Page = () => {
//   const jobs = [
//     {
//       role: "Front Desk Officer",
//       location: "Douala, Cameroon",
//       desc: "Welcoming guests, managing reservations, and ensuring an outstanding customer experience.",
//       image: "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg", // background image
//     },
//     {
//       role: "Full-Stack Developer",
//       location: "Remote",
//       desc: "Build and scale our booking platform with modern technologies.",
//       image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
//     },
//     {
//       role: "Marketing Specialist",
//       location: "Yaoundé, Cameroon",
//       desc: "Create campaigns that attract new customers and build brand awareness.",
//       image: "https://images.pexels.com/photos/3184355/pexels-photo-3184355.jpeg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero with Mission */}
//       <section className="relative h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
//         <Image
//           src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
//           alt="Team working together"
//           fill
//           priority
//           className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 max-w-3xl px-4">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
//           <h2 className="text-2xl md:text-3xl font-semibold mb-3">
//             Our Mission
//           </h2>
//           <p className="text-lg md:text-xl text-gray-100">
//             We’re on a mission to transform the hospitality experience in
//             Cameroon by connecting travelers to the best hotels and services.
//             Be part of a team passionate about innovation and exceptional
//             customer care.
//           </p>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="bg-white py-16 px-6 relative">
//         <div className="max-w-6xl mx-auto">
//           <h3 className="text-3xl font-bold mb-8 text-center">
//             Why Work With Us?
//           </h3>
//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "Growth",
//                 desc: "Opportunities for continuous learning & career advancement.",
//               },
//               {
//                 title: "Flexibility",
//                 desc: "Hybrid work model & flexible schedules to support balance.",
//               },
//               {
//                 title: "Perks",
//                 desc: "Hotel discounts, travel benefits, bonuses and wellness perks.",
//               },
//               {
//                 title: "Culture",
//                 desc: "A diverse and inclusive workplace built on collaboration.",
//               },
//             ].map((b, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-100 rounded-xl p-6 shadow-md hover:scale-105 transition"
//               >
//                 <h4 className="font-bold text-xl mb-2">{b.title}</h4>
//                 <p className="text-gray-600">{b.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions with background images */}
//       <section className="max-w-6xl mx-auto py-16 px-6">
//         <h3 className="text-3xl font-bold mb-6 text-center">Open Positions</h3>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           We’re looking for passionate people to join our growing team. Explore
//           our open roles below.
//         </p>
//         <div className="space-y-8">
//           {jobs.map((job, i) => (
//             <div
//               key={i}
//               className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
//               style={{ minHeight: "220px" }}
//             >
//               {/* Background Image */}
//               <Image
//                 src={job.image}
//                 alt={job.role}
//                 fill
//                 className="object-cover brightness-50"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40"></div>

//               {/* Text Content */}
//               <div className="relative z-10 p-6 flex flex-col md:flex-row md:items-center justify-between h-full">
//                 <div className="max-w-2xl text-white">
//                   <h4 className="font-semibold text-xl">{job.role}</h4>
//                   <p className="text-gray-200">{job.location}</p>
//                   <p className="mt-2">{job.desc}</p>
//                 </div>
//                 <button className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-blue-600 py-16 px-6 text-center text-white">
//         <h3 className="text-3xl font-bold mb-4">Didn’t Find Your Role?</h3>
//         <p className="mb-6 max-w-2xl mx-auto">
//           We’re always on the lookout for talented people. Send us your CV and
//           let’s talk about how you could fit into our growing team.
//         </p>
//         <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
//           Send Your CV
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Page;

"use client";
import Image from "next/image";
import NavbarComponent from "@/components/Navbar/NavbarComponent";

const Page = () => {
  // Benefits data with professional explanations
  const benefits = [
    {
      title: "Growth",
      desc: "We invest in our people through structured mentorship, training programs, and career development pathways designed to help you advance quickly. Whether you’re starting out or already experienced, we support your professional journey.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    },
    {
      title: "Flexibility",
      desc: "We believe in work–life balance. Our hybrid work options, flexible schedules, and generous leave policies give you the freedom to thrive at work and at home.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    },
    {
      title: "Perks",
      desc: "Enjoy exclusive staff discounts at our partner hotels, wellness allowances, annual bonuses, and travel incentives. We reward performance and well-being equally.",
      image: "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg",
    },
    {
      title: "Culture",
      desc: "Join a diverse, inclusive, and collaborative environment where new ideas are celebrated. Our open-door policy and team events make it easy to build meaningful connections.",
      image: "https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg",
    },
  ];

  // Jobs data with professional explanations
  const jobs = [
    {
      role: "Front Desk Officer",
      location: "Douala, Cameroon",
      desc: "Be the first point of contact for guests. Handle check-ins and check-outs, manage reservations, and ensure every guest has an exceptional experience.",
      image: "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg",
    },
    {
      role: "Full-Stack Developer",
      location: "Remote",
      desc: "Help us build and scale our next-generation booking platform using React, Node.js, and cloud technologies. Work closely with product and design teams to deliver high-quality solutions.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      role: "Marketing Specialist",
      location: "Yaoundé, Cameroon",
      desc: "Develop and execute multi-channel campaigns, analyze performance metrics, and collaborate with hotels to maximize reach and engagement.",
      image: "https://images.pexels.com/photos/3184355/pexels-photo-3184355.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <NavbarComponent />

      {/* Hero Section with Mission */}
      <section className="relative h-[450px] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
          alt="Team working together"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-100">
            We’re on a mission to transform the hospitality experience in Cameroon by connecting travelers to the best hotels and services. Be part of a team passionate about innovation and exceptional customer care.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Work With Us?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition transform duration-300"
                style={{ minHeight: "220px" }}
              >
                {/* Background Image */}
                <img
                  src={b.image}
                  alt={b.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text Overlay */}
                <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                  <h4 className="font-bold text-xl mb-2">{b.title}</h4>
                  <p className="text-gray-100 text-sm md:text-base">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Open Positions</h3>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re looking for passionate people to join our growing team. Explore our open roles below.
        </p>
        <div className="space-y-8">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform duration-300"
              style={{ minHeight: "220px" }}
            >
              <img
                src={job.image}
                alt={job.role}
                className="absolute inset-0 w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-6 flex flex-col md:flex-row md:items-center justify-between h-full">
                <div className="max-w-2xl text-white">
                  <h4 className="font-semibold text-xl">{job.role}</h4>
                  <p className="text-gray-200">{job.location}</p>
                  <p className="mt-2 text-sm md:text-base">{job.desc}</p>
                </div>
                <button className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Didn’t Find Your Role?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          We’re always on the lookout for talented people. Send us your CV and let’s talk about how you could fit into our growing team.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Send Your CV
        </button>
      </section>
    </div>
  );
};

export default Page;
