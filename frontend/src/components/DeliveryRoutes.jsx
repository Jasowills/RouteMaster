import React, { useState, useEffect } from 'react';
import RouteCard from './RouteCard';
import { FaSearch, FaSpinner } from 'react-icons/fa';

const DeliveryRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState(null); // State for the selected route
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch('http://localhost:5000/routes');
        const data = await response.json();
        setRoutes(data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRoutes();
  }, []);

  const filteredRoutes = routes.filter(route =>
    route.driver.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (route) => {
    setSelectedRoute(route);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRoute(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white">
      {/* Search bar */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search by driver name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-950 dark:border-gray-600 dark:focus:ring-blue-400"
        />
        <FaSearch className="absolute top-3 right-3 text-gray-500 dark:text-gray-300" size={20} />
      </div>

      {/* Loading spinner */}
      {loading ? (
        <div className="flex justify-center items-center">
          <FaSpinner className="animate-spin text-blue-500" size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route) => (
              <RouteCard key={route._id} route={route} onClick={() => openModal(route)} />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300">No routes found.</p>
          )}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedRoute && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl relative">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Modal Content */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        {selectedRoute.routeName}
      </h2>
      
      <div className="space-y-4">
        {/* Driver Info */}
        <div className="flex w-1/3 justify-between items-center space-x-1">
          <span className="text-gray-600 dark:text-gray-400 font-medium w-1/3">
            Driver:
          </span>
          <span className="text-gray-800 dark:text-gray-200">{selectedRoute.driver}</span>
        </div>

        {/* Status */}
        <div className="flex w-1/3 justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400 font-medium w-1/3">
            Status:
          </span>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm ${
              selectedRoute.status === 'In Progress'
                ? 'bg-green-500 text-white'
                : selectedRoute.status === 'Pending'
                ? 'bg-yellow-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            {selectedRoute.status}
          </span>
        </div>

        {/* Route Details */}
        <div className='flex justify-between items-center w-fit gap-3'>
          <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">
            Details
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {selectedRoute.details || 'No additional details available.'}
          </p>
        </div>
        <div className="date flex justify-between items-center w-fit gap-3">
  <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">Date:</h3>
  <p className="text-md text-gray-600 dark:text-gray-400">
    {new Date(selectedRoute.createdAt).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
  </p>
</div>

      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default DeliveryRoutes;
