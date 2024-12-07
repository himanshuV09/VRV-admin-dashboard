import React, { useState } from 'react';
import { Menu, Users, Shield, Key, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Layout({ children, currentView, onNavigate }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navigation = [
    { name: 'Users', icon: Users },
    { name: 'Roles', icon: Shield },
    { name: 'Permissions', icon: Key },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <Menu className="w-6 h-6 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 -mr-2 rounded-md lg:hidden hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navigation.map(({ name, icon: Icon }) => (
              <li key={name}>
                <button
                  onClick={() => {
                    onNavigate(name.toLowerCase());
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    currentView === name.toLowerCase()
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b lg:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 -ml-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            {navigation.find(({ name }) => currentView === name.toLowerCase())?.name}
          </h1>
          <div className="w-6" /> {/* Spacer for centering */}
        </div>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}