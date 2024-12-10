import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DeliveryRoutes from '../components/DeliveryRoutes';
import AddRoutes from '../components/AddRoutes';
import DriversList from '../components/DriverList';
import { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState('deliveryRoutes');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-grow pt-16">
        {/* Sidebar */}
        <div
          className={`fixed top-16 left-0 z-20 h-full transition-transform transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 w-64 bg-white dark:bg-gray-950`}
          role="navigation"
          aria-label="Sidebar"
        >
          <Sidebar setCurrentView={setCurrentView} currentView={currentView} />
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
            aria-hidden="true"
          />
        )}

        {/* Main Content */}
        <div className="flex-1 md:ml-64 overflow-y-auto bg-gray-100 dark:bg-gray-950">
          <div className="p-6">
            {currentView === 'deliveryRoutes' && <DeliveryRoutes />}
            {currentView === 'addRoutes' && <AddRoutes />}
            {currentView === 'drivers' && <DriversList />}
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Dashboard;
