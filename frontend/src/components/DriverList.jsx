import React, { useEffect, useState } from 'react';

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch('https://routemaster-bj3j.onrender.com/routes'); // Update with your actual API endpoint
        const data = await response.json();
        setDrivers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Drivers</h2>
      {loading ? (
        <p>Loading drivers...</p>
      ) : (
        <ul className="space-y-2">
          {drivers.map((driver) => (
            <li
              key={driver._id} // Ensure the `driver` object has a unique `id` field
              className="p-3 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              {driver.driver}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriversList;
