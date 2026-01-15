import React from 'react';
import { Button } from '@/components/Button';
import { ADVANTAGES, TESTIMONIALS } from '@/constants';

export default function Home() {
  const phoneNumber = "7003700852";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-200 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              VERIFIED TUTORS AVAILABLE
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Empower Their <br/>
              <span className="text-indigo-600">Future</span> with Home <br/>
              Learning.
            </h1>

            <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Connect with the best home tutors in the city. From <span className="text-gray-900 font-semibold">Nursery to Class 12</span>, we provide personalized 1-on-1 teaching for all boards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href={`tel:${phoneNumber}`} className="group">
                <Button size="lg" className="h-16 px-10 rounded-2xl shadow-xl shadow-indigo-100 group-hover:scale-105 transition-transform">
                  Find a Tutor Now
                </Button>
              </a>
              <a href="#advantages">
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl hover:bg-gray-50">
                  Why Choose Us
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Student Learning" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-gray-50/50 scroll-mt-navbar">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-gray-900">Why Arisu Tutors?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Personalized 1-on-1 education tailored to your child's pace.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-gray-900 relative p-8 lg:p-20 text-center">
          <h2 className="text-3xl lg:text-6xl font-extrabold text-white mb-8">Ready to start?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
              <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 w-full font-bold text-xl">
                Call Now
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="h-16 px-12 rounded-2xl bg-[#25D366] text-white hover:bg-[#128C7E] w-full font-bold text-xl">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}