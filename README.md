# RouteMaster

RouteMaster is a web application designed for managing delivery routes. It allows users to track and manage routes assigned to drivers, view detailed route information, and filter routes by driver names. Built with a React frontend and a Node.js Express backend, this app provides a modern, user-friendly interface to manage and report on delivery activities.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Backend Setup](#backend-setup)
  - [API Endpoints](#api-endpoints)
- [Frontend Setup](#frontend-setup)
  - [Running the Frontend](#running-the-frontend)

## Features
### Frontend:
- **Responsive Layout**: The frontend is built using React and styled with Tailwind CSS to ensure a responsive design that works across devices.
- **Route Management**: Display, filter, and view details about delivery routes.
- **Driver Filtering**: Filter routes by the driver's name for easy search and management.
- **Dark Mode**: Toggle between light and dark modes for better accessibility.
- **Sidebar Navigation**: Navigate through the dashboard, account settings, and reports sections.

### Backend:
- **API for Routes**: The backend serves a list of routes with detailed information, such as the driver, route status, and delivery details.
- **Data Management**: The backend allows the creation, retrieval, and filtering of route data.
- **Authentication (Optional)**: Secure the API with JWT authentication if needed.

---

## Technologies

- **Frontend**: React, Tailwind CSS, React Router, React Icons
- **Backend**: Node.js, Express, MongoDB (Mongoose for ORM)
- **Authentication (Optional)**: JWT, Bcrypt.js
- **State Management**: React useState, Context API (Optional)

---

## Backend Setup

The backend server will now be running on `http://localhost:5000`.

### API Endpoints

- **GET /api/routes**: Fetch all routes.
  - Response:
    ```json
    [
      {
        "id": 1,
        "routeName": "Route 1",
        "driver": "John Doe",
        "status": "Completed",
        "details": "Delivery to 5 locations in Lagos."
      },
      {
        "id": 2,
        "routeName": "Route 2",
        "driver": "Jane Smith",
        "status": "In Progress",
        "details": "Pickup from 3 locations in Abuja."
      }
    ]
    ```


- **POST /api/routes**: Create a new route.
  - Request Body:
    ```json
    {
      "routeName": "Route 4",
      "driver": "Samuel Lee",
      "status": "Scheduled",
      "details": "Scheduled deliveries in Port Harcourt."
    }
    ```

  - Response:
    ```json
    {
      "id": 4,
      "routeName": "Route 4",
      "driver": "Samuel Lee",
      "status": "Scheduled",
      "details": "Scheduled deliveries in Port Harcourt."
    }
    ```

- **GET /api/routes/filter?driver=<driverName>**: Filter routes by driver's name.
  - Example: `/api/routes/filter?driver=John Doe`
  - Response: Filters routes where the driver matches the query.

---

## Frontend Setup

### Running the Frontend

1. Go to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will now be running on `http://localhost:3000`.




- **components/**: Contains reusable React components such as `Navbar`, `RouteList`, and `RouteDetails`.
- **App.js**: Main component that renders the application.
- **tailwind.config.js**: Configuration file for Tailwind CSS.





## Conclusion

RouteMaster provides a modern solution for managing delivery routes, allowing users to track routes, filter them by driver, and view detailed information. With a responsive frontend built using React and a robust backend powered by Node.js and Express, this app offers a comprehensive solution for managing delivery logistics.

Feel free to explore, contribute, and enhance the application for your use case!