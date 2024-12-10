import React from 'react';
import { FaCheckCircle, FaClock, FaSpinner } from 'react-icons/fa';

const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress':
      return 'bg-green-500 text-white';
    case 'Pending':
      return 'bg-yellow-500 text-white';
    case 'Completed':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-300 text-black';
  }
};

const RouteCard = ({ route, onClick }) => {
  const { routeName, driver, status } = route;
  const statusClass = getStatusColor(status);

  return (
    <div
      onClick={onClick}
      className="p-6  rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-950"
    >
      <h2 className="text-xl font-poppins font-semibold mb-2">{routeName}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        <strong>Driver:</strong> {driver}
      </p>

      {/* Status section */}
      <div className="flex items-center mt-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full ${statusClass}`}>
          {status === 'In Progress' && <FaSpinner className="animate-spin mr-2" size={16} />}
          {status === 'Pending' && <FaClock className="mr-2" size={16} />}
          {status === 'Completed' && <FaCheckCircle className="mr-2" size={16} />}
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
