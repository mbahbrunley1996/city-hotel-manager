
"use client";
import Slider from "react-slick";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "“An unforgettable stay! The staff went above and beyond.”",
      name: "John D., USA",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "“Beautiful rooms and excellent service. Highly recommend.”",
      name: "Sofia L., Spain",
    },
    {
      img: "https://randomuser.me/api/portraits/men/76.jpg",
      text: "“I felt like royalty during my entire visit.”",
      name: "Liam O., Ireland",
    },
    {
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "“Everything from booking to checkout was seamless.”",
      name: "Anna P., Germany",
    },
    {
      img: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "“World-class service! I’ll definitely return.”",
      name: "Marco R., Italy",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <img
                  src={t.img}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic mb-4">{t.text}</p>
                <h4 className="font-semibold">{t.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
