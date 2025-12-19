import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center group">
            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-emerald-500 transition-colors">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-slate-900 tracking-tight">Studio</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#about" className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-100">About</a>
            <a href="#projects" className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-100">Work</a>
            <a href="#clients" className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-100">Testimonials</a>
            <a href="#contact" className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors rounded-lg hover:bg-slate-100">Contact</a>
            <a href="/admin" className="ml-4 px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">Admin</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
