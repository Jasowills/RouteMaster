import React from 'react';
import { FaTruck, FaPlusCircle, FaUserCircle, FaMotorcycle } from 'react-icons/fa';

const Sidebar = ({ setCurrentView, currentView }) => {
  return (
    <div className="w-64 p-6 flex mt-2 flex-col h-full bg-white dark:bg-gray-950 text-black dark:text-white transition-all duration-300 ease-in-out">
      {/* Profile Section */}
      <div className="flex items-center mt-10 mb-6 space-x-4">
        <FaUserCircle size={40} />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-sm">Administrator</p>
        </div>
      </div>

      <ul className="space-y-4 font-poppins">
        <li
          onClick={() => setCurrentView('deliveryRoutes')}
          className={`flex items-center cursor-pointer text-lg px-4 py-2 rounded-lg transition-colors duration-300 ${
            currentView === 'deliveryRoutes' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-600'
          }`}
        >
          <FaTruck className="mr-3" size={20} />
          Delivery Routes
        </li>
        <li
          onClick={() => setCurrentView('addRoutes')}
          className={`flex items-center cursor-pointer text-lg px-4 py-2 rounded-lg transition-colors duration-300 ${
            currentView === 'addRoutes' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-600'
          }`}
        >
          <FaPlusCircle className="mr-3" size={20} />
          Add Route
        </li>
        <li
          onClick={() => setCurrentView('drivers')}
          className={`flex items-center cursor-pointer text-lg px-4 py-2 rounded-lg transition-colors duration-300 ${
            currentView === 'drivers' ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-600'
          }`}
        >
          <FaMotorcycle className="mr-3" size={20} />
          Drivers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
