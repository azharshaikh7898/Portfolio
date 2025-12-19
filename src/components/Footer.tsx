import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">Studio</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Crafting exceptional digital experiences that drive meaningful results for forward-thinking companies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">Work</a></li>
              <li><a href="#clients" className="text-slate-400 hover:text-emerald-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="/admin" className="text-slate-400 hover:text-emerald-400 transition-colors">Admin Panel</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-400">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-emerald-400" />
                <a href="mailto:azharshaikhshaikh.7898@gmail.com" className="hover:text-emerald-400 transition-colors">azharshaikhshaikh.7898@gmail.com</a>
              </li>
              <li className="flex items-start text-slate-400">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-emerald-400" />
                <a href="tel:+91 7898555765" className="hover:text-emerald-400 transition-colors">+91 7898555765</a>
              </li>
              <li className="flex items-start text-slate-400">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-emerald-400" />
                <span>Indore, MP</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
