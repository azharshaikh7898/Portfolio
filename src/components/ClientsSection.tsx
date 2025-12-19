import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import type { Client } from '../lib/database.types';
import { Quote } from 'lucide-react';

export function ClientsSection() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    try {
      const q = query(collection(db, 'clients'), orderBy('created_at', 'desc'));
      const querySnapshot = await getDocs(q);
      const clientsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Client[];
      setClients(clientsData);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Clients Say</h2>
            <p className="text-slate-600">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">What Clients Say</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Real stories from the people who've trusted us with their projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              <div className="mb-6">
                <Quote className="w-10 h-10 text-emerald-500 opacity-50" />
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed line-clamp-5">{client.description}</p>
              <div className="flex items-center pt-6 border-t border-slate-200">
                <img
                  src={client.image_url}
                  alt={client.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-emerald-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{client.name}</h4>
                  <p className="text-slate-600 text-sm">{client.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
