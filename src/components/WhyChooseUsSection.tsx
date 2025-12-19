import { Zap, Shield, Clock, HeadphonesIcon, TrendingUp, Sparkles } from 'lucide-react';

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and frameworks to build fast, scalable, and future-proof solutions that keep you ahead of the curve.'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Your data and users are protected with industry-leading security practices, ensuring peace of mind for your business.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your timeline. Our agile methodology ensures projects are delivered on schedule without compromising quality.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to assist you, providing quick solutions and continuous maintenance.'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that matter to your business - increased conversions, better engagement, and real growth.'
    },
    {
      icon: Sparkles,
      title: 'Design Excellence',
      description: 'Beautiful interfaces combined with seamless user experience. We create digital products that users love to interact with.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Your Success Is Our Priority
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            We don't just build digital products—we create experiences that transform businesses and delight users. Here's what sets us apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
