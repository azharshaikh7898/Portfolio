import { useState } from 'react';
import { Building2, FolderOpen, Users, Mail, Newspaper, Menu, X } from 'lucide-react';
import { ProjectManagement } from '../components/admin/ProjectManagement';
import { ClientManagement } from '../components/admin/ClientManagement';
import { ContactFormsList } from '../components/admin/ContactFormsList';
import { NewsletterSubscriptionsList } from '../components/admin/NewsletterSubscriptionsList';

type Tab = 'projects' | 'clients' | 'contacts' | 'newsletter';

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { id: 'projects' as Tab, label: 'Projects', icon: FolderOpen },
    { id: 'clients' as Tab, label: 'Clients', icon: Users },
    { id: 'contacts' as Tab, label: 'Contact Forms', icon: Mail },
    { id: 'newsletter' as Tab, label: 'Newsletter', icon: Newspaper },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Admin Panel</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Back to Site
              </a>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-700"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside
            className={`${
              sidebarOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => {
                          setActiveTab(tab.id);
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'projects' && <ProjectManagement />}
              {activeTab === 'clients' && <ClientManagement />}
              {activeTab === 'contacts' && <ContactFormsList />}
              {activeTab === 'newsletter' && <NewsletterSubscriptionsList />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
