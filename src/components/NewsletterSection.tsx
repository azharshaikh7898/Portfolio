import { useState, FormEvent } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const q = query(collection(db, 'newsletter_subscriptions'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage({ type: 'error', text: 'This email is already subscribed!' });
        setSubmitting(false);
        return;
      }

      await addDoc(collection(db, 'newsletter_subscriptions'), {
        email,
        created_at: Timestamp.now()
      });

      setMessage({ type: 'success', text: 'Thank you for subscribing to our newsletter!' });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Stay in the Loop</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get the latest updates on our projects, insights, and industry trends delivered to your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-slate-700 bg-slate-800/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-slate-400 transition-all backdrop-blur"
                placeholder="Your email address"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-emerald-500 text-white py-4 px-8 rounded-xl font-semibold hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg shadow-emerald-500/30"
            >
              {submitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {message && (
            <div
              className={`mt-6 p-4 rounded-xl text-center border ${
                message.type === 'success' ? 'bg-emerald-900/50 text-emerald-300 border-emerald-700' : 'bg-red-900/50 text-red-300 border-red-700'
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
