
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const Page = () => {
//   // Benefits data with images
//   const benefits = [
//     {
//       title: "Growth",
//       desc: "Opportunities for continuous learning & career advancement.",
//       image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
//     },
//     {
//       title: "Flexibility",
//       desc: "Hybrid work model & flexible schedules to support balance.",
//       image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
//     },
//     {
//       title: "Perks",
//       desc: "Hotel discounts, travel benefits, bonuses and wellness perks.",
//       image: "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg",
//     },
//     {
//       title: "Culture",
//       desc: "A diverse and inclusive workplace built on collaboration.",
//       image: "https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg",
//     },
//   ];

//   // Jobs data with images
//   const jobs = [
//     {
//       role: "Front Desk Officer",
//       location: "Douala, Cameroon",
//       desc: "Welcoming guests, managing reservations, and ensuring an outstanding customer experience.",
//       image: "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg",
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
//         <motion.div
//           className="relative z-10 max-w-3xl px-4"
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           transition={{ duration: 0.8 }}
//         >
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
//         </motion.div>
//       </section>

//       {/* Benefits with Background Images */}
//       <section className="bg-white py-16 px-6 relative">
//         <motion.div
//           className="max-w-6xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-3xl font-bold mb-8 text-center">
//             Why Work With Us?
//           </h3>
//           <div className="grid md:grid-cols-4 gap-6">
//             {benefits.map((b, i) => (
//               <motion.div
//                 key={i}
//                 className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
//                 style={{ minHeight: "220px" }}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 transition={{ duration: 0.6, delay: i * 0.15 }}
//               >
//                 {/* Background Image */}
//                 <Image
//                   src={b.image}
//                   alt={b.title}
//                   fill
//                   className="object-cover brightness-50"
//                 />
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Text Overlay */}
//                 <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
//                   <h4 className="font-bold text-xl mb-2">{b.title}</h4>
//                   <p className="text-gray-100">{b.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Open Positions with Background Images */}
//       <section className="max-w-6xl mx-auto py-16 px-6">
//         <motion.h3
//           className="text-3xl font-bold mb-6 text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.6 }}
//         >
//           Open Positions
//         </motion.h3>
//         <motion.p
//           className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           We’re looking for passionate people to join our growing team. Explore
//           our open roles below.
//         </motion.p>
//         <div className="space-y-8">
//           {jobs.map((job, i) => (
//             <motion.div
//               key={i}
//               className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
//               style={{ minHeight: "220px" }}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//             >
//               {/* Background Image */}
//               <Image
//                 src={job.image}
//                 alt={job.role}
//                 fill
//                 className="object-cover brightness-50"
//               />
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
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <motion.section
//         className="bg-blue-600 py-16 px-6 text-center text-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeUp}
//         transition={{ duration: 0.6 }}
//       >
//         <h3 className="text-3xl font-bold mb-4">Didn’t Find Your Role?</h3>
//         <p className="mb-6 max-w-2xl mx-auto">
//           We’re always on the lookout for talented people. Send us your CV and
//           let’s talk about how you could fit into our growing team.
//         </p>
//         <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
//           Send Your CV
//         </button>
//       </motion.section>
//     </div>
//   );
// };

// export default Page;

//page with framer motion

{/* Open Positions with Background Images */}
<section className="max-w-6xl mx-auto py-16 px-6">
  <motion.h3
    className="text-3xl font-bold mb-6 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ duration: 0.6 }}
  >
    Open Positions
  </motion.h3>
  <motion.p
    className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    We’re looking for passionate people to join our growing team. Explore
    our open roles below.
  </motion.p>
  <div className="space-y-8">
    {jobs.map((job, i) => (
      <motion.div
        key={i}
        className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
        style={{ minHeight: "220px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: i * 0.15 }}
      >
        {/* Background Image */}
        <Image
          src={job.image}
          alt={job.role}
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="relative z-10 p-6 flex flex-col md:flex-row md:items-center justify-between h-full">
          <div className="max-w-2xl text-white">
            <h4 className="font-semibold text-xl">{job.role}</h4>
            <p className="text-gray-200">{job.location}</p>
            <p className="mt-2">{job.desc}</p>
          </div>

          {/* Motion Button */}
          <motion.button
            className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-lg"
            whileHover={{ scale: 1.08, backgroundColor: "#1e40af" }} // hover effect
            whileTap={{ scale: 0.95 }} // tap effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            Apply Now
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>
</section>

// Perfect 🙂 — let’s add a Framer Motion hover/tap animation to the “Apply Now” button.
//This will make the button subtly scale up on hover and press down on tap, giving a professional feel.