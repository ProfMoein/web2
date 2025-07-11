import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ایمپورت از مسیر صحیح
import { Pagination } from 'swiper/modules'; // ایمپورت از مسیر صحیح

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

const slides = [slide1, slide2, slide3];

export default function HeroSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}  // استفاده مستقیم از پلاگین‌ها
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-64 md:h-96 rounded-lg overflow-hidden"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
