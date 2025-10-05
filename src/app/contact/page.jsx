
"use client";

import React from "react";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {

  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = () => {
   setIsSending(true);

  emailjs.sendForm(
    'service_polrjjn',       // from your dashboard
    'template_2avy0u8',      // from your dashboard
    form.current,
    'Wdc-TWzCZa2pRc_5r'  // from your dashboard
  )
  .then(
        () => {
          setIsSending(false);
          toast.success(" Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          toast.error(" Failed to send: " + error.text);
        }
      );
};

  return (
    <>
      <NavbarComponent />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <ToastContainer position="top-center" />
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="Hotel background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            Reach out to CityHotelManager for inquiries, support, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Form + Photo Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
          
          {/* Form */}
          <div className="lg:w-1/2 bg-white text-black p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form ref={form} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {isSending ? (
                <Button size="lg" className="w-full" disabled>
                  <Loader2Icon className="animate-spin" />
                  Please wait...
                </Button>
              ) : (
                <Button size="sm" onClick={sendEmail}
                className="w-full flex items-center justify-center p-3 text-white bg-blue-700 rounded-lg hover:bg-slate-700 transition-colors font-bold"
                  >
                  Send Message
                </Button>
              )}
            </form>
          </div>

          {/* Photo */}
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/7681288/pexels-photo-7681288.jpeg"
              alt="Hotel interior"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Contact Info + Social + Map */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Office Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Our Office</h2>
            <p>123 Hotel Street, Douala, Cameroon</p>
            <p>Email: info@cityhotelmanager.com</p>
            <p>Phone: +237 676 795 473</p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4 text-gray-700">
              <a href="#" className="hover:text-blue-600"><Github size={24} /></a>
              <a href="#" className="hover:text-blue-700"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-pink-500"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0467420683296!2d9.716180114306676!3d4.050469296310924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054a8fef4f5c32d%3A0x7028dfc85a0ef6aa!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1694640000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent />
    </>
  );
};

export default ContactPage;