import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSlider from '../components/HeroSlider/HeroSlider';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Hero Slider */}
        <section>
          <HeroSlider />
        </section>

        {/* معرفی درس */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            معرفی درس برنامه‌نویسی وب ۲ با React
          </h2>
          <p className="text-gray-700 leading-relaxed">
            در این درس شما با مفاهیم پایه و پیشرفتهٔ React آشنا می‌شوید و یاد می‌گیرید
            چگونه با استفاده از کامپوننت‌های تابعی و کلاسیک، رابط‌های کاربری پویا
            و واکنش‌گرا (responsive) بسازید. مباحث اصلی شامل JSX، مدیریت حالت
            (State & Props)، هوک‌های React مثل <code>useState</code> و{' '}
            <code>useEffect</code>، مسیریابی با React Router و ارتباط با سرور
            از طریق درخواست‌های AJAX با کتابخانه‌هایی مانند <code>axios</code>
            است. در پایان دوره قادر خواهید بود برنامه‌های تک‌صفحه‌ای (SPA) با
            طراحی مدرن و تجربه کاربری روان پیاده‌سازی کنید.
          </p>
        </section>

        {/* معرفی استاد و لیست دانشجویان (فعلاً placeholder) */}
        <section className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">استاد دوره</h3>
            <p className="text-gray-800">دکتر علی رضائی</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">لیست دانشجویان</h3>
            <p className="text-gray-600">در آینده این قسمت لیست دانشجویان را نشان می‌دهد.</p>
          </div>
        </section>
      </main>
    </>
  );
}
