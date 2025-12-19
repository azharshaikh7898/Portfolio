import { Target, Users, Lightbulb, Award } from 'lucide-react';

export function AboutUsSection() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and create lasting impact in the digital landscape.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of passionate designers, developers, and strategists committed to excellence and collaboration.'
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'We blend creativity with technical expertise, focusing on user-centered design and scalable solutions.'
    },
    {
      icon: Award,
      title: 'Our Promise',
      description: 'Delivering exceptional quality, transparent communication, and results that exceed expectations every time.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50 opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Building Digital Excellence Since Day One
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            We're a team of passionate creators, strategists, and technologists dedicated to transforming ideas into exceptional digital experiences. Our journey began with a simple belief: that great design and powerful technology can solve real business challenges.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Today, we partner with ambitious organizations worldwide, helping them navigate the digital landscape with confidence and creativity. Every project we undertake is an opportunity to push boundaries, challenge conventions, and deliver meaningful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="text-4xl font-bold text-slate-900 mb-2">150+</div>
            <div className="text-slate-600 font-medium">Projects Delivered</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
            <div className="text-slate-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600 font-medium">Team Members</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="text-4xl font-bold text-slate-900 mb-2">8+</div>
            <div className="text-slate-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
