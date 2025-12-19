import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import type { NewsletterSubscription } from '../../lib/database.types';
import { Mail, Trash2, Download } from 'lucide-react';
import { formatDateTime } from '../../lib/dateUtils';

export function NewsletterSubscriptionsList() {
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  async function fetchSubscriptions() {
    try {
      const q = query(collection(db, 'newsletter_subscriptions'), orderBy('created_at', 'desc'));
      const querySnapshot = await getDocs(q);
      const subscriptionsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as NewsletterSubscription[];
      setSubscriptions(subscriptionsData);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this subscription?')) return;

    try {
      await deleteDoc(doc(db, 'newsletter_subscriptions', id));
      fetchSubscriptions();
    } catch (error) {
      console.error('Error deleting subscription:', error);
      alert('Error deleting subscription. Please try again.');
    }
  }

  function exportToCSV() {
    const csvContent = [
      ['Email', 'Subscribed Date'],
      ...subscriptions.map(sub => [
        sub.email,
        formatDateTime(sub.created_at)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscriptions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Newsletter Subscriptions</h2>
          <p className="text-gray-600 mt-2">Manage your newsletter subscriber list</p>
        </div>
        {subscriptions.length > 0 && (
          <button
            onClick={exportToCSV}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Export CSV
          </button>
        )}
      </div>

      <div className="space-y-3">
        {subscriptions.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No newsletter subscriptions yet.</p>
          </div>
        ) : (
          subscriptions.map((subscription) => (
            <div key={subscription.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center flex-1">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <a href={`mailto:${subscription.email}`} className="text-gray-900 hover:text-blue-600 font-medium">
                      {subscription.email}
                    </a>
                    <p className="text-sm text-gray-500">
                      Subscribed: {formatDateTime(subscription.created_at)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(subscription.id)}
                  className="flex items-center justify-center bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors ml-4"
                  title="Delete subscription"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {subscriptions.length > 0 && (
        <div className="mt-6 text-sm text-gray-500 text-center">
          Total subscribers: {subscriptions.length}
        </div>
      )}
    </div>
  );
}
