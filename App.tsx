import React from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { ADVANTAGES, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const phoneNumber = "7003700852";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

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
              
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Tutor" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">500+</div>
                </div>
                <p className="text-sm text-gray-500 font-medium">Trusted by 500+ Expert Educators</p>
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
                {/* Float Card 1 */}
                <div className="absolute -left-8 top-1/4 glass p-4 rounded-2xl shadow-xl border border-white/50 max-w-[180px] hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">✓</div>
                    <p className="text-xs font-bold text-gray-800">Verified Credentials</p>
                  </div>
                </div>
                {/* Float Card 2 */}
                <div className="absolute -right-8 bottom-1/4 glass p-4 rounded-2xl shadow-xl border border-white/50 max-w-[180px] hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">★</div>
                    <p className="text-xs font-bold text-gray-800">1-on-1 Personal Attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section id="advantages" className="py-24 bg-gray-50/50 scroll-mt-navbar">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900">Why Arisu Tutors?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">We provide more than just teaching; we provide a foundation for lifelong academic success.</p>
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

        {/* Testimonials */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">Hear from Our Happy Parents</h2>
                <p className="text-gray-600">Success stories from families who chose Arisu Home Tuition for their children.</p>
                <div className="pt-4">
                  <a href={`tel:${phoneNumber}`}>
                    <Button variant="outline" className="rounded-xl">View All Reviews</Button>
                  </a>
                </div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                {TESTIMONIALS.slice(0, 2).map((t) => (
                  <div key={t.id} className="p-8 rounded-[2rem] bg-indigo-600 text-white shadow-xl relative">
                    <div className="absolute top-6 right-8 text-6xl opacity-20 font-serif">"</div>
                    <p className="text-indigo-50 italic mb-8 relative z-10 leading-relaxed">
                      {t.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400" />
                      <div>
                        <p className="font-bold">{t.name}</p>
                        <p className="text-indigo-200 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Live CTA */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-gray-900 relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
              alt="Education background"
            />
            <div className="relative z-10 px-8 py-16 lg:p-20 text-center">
              <h2 className="text-3xl lg:text-6xl font-extrabold text-white mb-8">Ready to start?</h2>
              <p className="text-gray-300 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Book a free session with an academic consultant to find the perfect tutor match for your child today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
                  <Button size="lg" className="h-16 px-12 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 w-full font-bold text-xl">
                    Call 70037-00852
                  </Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="h-16 px-12 rounded-2xl bg-[#25D366] text-white hover:bg-[#128C7E] w-full font-bold text-xl flex items-center gap-3">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-100">A</div>
                <span className="text-2xl font-bold text-gray-900">Arisu Home Tuition</span>
              </div>
              <p className="text-gray-500 max-w-xs text-sm">
                Empowering the next generation with personalized 1-on-1 education across all boards and subjects.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><a href="#advantages" className="hover:text-indigo-600">Advantages</a></li>
                  <li><a href={`tel:${phoneNumber}`} className="hover:text-indigo-600">Book Tutor</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Join as Tutor</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Coverage</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Kolkata</li>
                  <li>Howrah</li>
                  <li>South 24 Parganas</li>
                </ul>
              </div>
              <div className="space-y-4 col-span-2 sm:col-span-1">
                <h4 className="font-bold text-gray-900">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="font-bold text-gray-900">+91 70037 00852</li>
                  <li>contact@arisu.edu</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
            <p>&copy; 2025 Arisu Home Tuition Consultancy. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;