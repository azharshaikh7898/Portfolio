import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import type { ContactForm } from '../../lib/database.types';
import { Mail, Phone, User, MapPin, Trash2 } from 'lucide-react';
import { formatDateTime } from '../../lib/dateUtils';

export function ContactFormsList() {
  const [contactForms, setContactForms] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactForms();
  }, []);

  async function fetchContactForms() {
    try {
      const q = query(collection(db, 'contact_forms'), orderBy('created_at', 'desc'));
      const querySnapshot = await getDocs(q);
      const formsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactForm[];
      setContactForms(formsData);
    } catch (error) {
      console.error('Error fetching contact forms:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this contact form submission?')) return;

    try {
      await deleteDoc(doc(db, 'contact_forms', id));
      fetchContactForms();
    } catch (error) {
      console.error('Error deleting contact form:', error);
      alert('Error deleting contact form. Please try again.');
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Contact Form Submissions</h2>
        <p className="text-gray-600 mt-2">View all contact form submissions from your website</p>
      </div>

      <div className="space-y-4">
        {contactForms.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No contact form submissions yet.</p>
          </div>
        ) : (
          contactForms.map((form) => (
            <div key={form.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="font-semibold text-gray-900">{form.full_name}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <a href={`mailto:${form.email}`} className="hover:text-blue-600">
                        {form.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <a href={`tel:${form.mobile_number}`} className="hover:text-blue-600">
                        {form.mobile_number}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      {form.city}
                    </div>
                    <div className="text-sm text-gray-500">
                      Submitted: {formatDateTime(form.created_at)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(form.id)}
                  className="flex items-center justify-center bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors ml-4"
                  title="Delete submission"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {contactForms.length > 0 && (
        <div className="mt-6 text-sm text-gray-500 text-center">
          Total submissions: {contactForms.length}
        </div>
      )}
    </div>
  );
}
