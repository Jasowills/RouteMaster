import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // Importing react-hot-toast
import { FaSpinner } from 'react-icons/fa'; // For the loading spinner icon

const AddRoutes = () => {
  const [newRoute, setNewRoute] = useState({
    routeName: '',
    driver: '',
    status: '',
    details: '',
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoute({
      ...newRoute,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting the form
    toast.loading('Adding Route....', {
      duration: 1000,
    })

    try {
      const response = await fetch('https://routemaster-bj3j.onrender.com/routes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRoute),
      });
      if (response.ok) {
        toast.success('Route added successfully!', {
          duration: 3000,
        });
        setNewRoute({
          routeName: '',
          driver: '',
          status: '',
          details: '',
        });
      } else {
        toast.error('Failed to add route. Please try again!', {
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later!', {
        duration: 3000,
      });
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Add New Route</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Route Name</label>
          <input
            type="text"
            name="routeName"
            value={newRoute.routeName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Driver</label>
          <input
            type="text"
            name="driver"
            value={newRoute.driver}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Status</label>
          <select
            name="status"
            value={newRoute.status}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Details</label>
          <textarea
            name="details"
            value={newRoute.details}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full p-3 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-md transition duration-300`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <FaSpinner className="animate-spin" size={20} />
            </div>
          ) : (
            'Add Route'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddRoutes;
