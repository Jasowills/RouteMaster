import Route from "../schema/routeSchema.js";

// Get all routes
export const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching routes", error: error.message });
  }
};

// Get a single route by ID
export const getRouteById = async (req, res) => {
  const { id } = req.params;

  try {
    const route = await Route.findById(id);
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json(route);
  } catch (error) {
    res.status(500).json({ message: "Error fetching route", error: error.message });
  }
};

// Add a new route
export const addRoute = async (req, res) => {
  const { routeName, driver, status, details } = req.body;

  if (!routeName || !driver || !status || !details) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newRoute = new Route({ routeName, driver, status, details });
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ message: "Error adding route", error: error.message });
  }
};

// Update a route by ID
export const updateRoute = async (req, res) => {
  const { id } = req.params;
  const { routeName, driver, status, details } = req.body;

  try {
    const updatedRoute = await Route.findByIdAndUpdate(
      id,
      { routeName, driver, status, details },
      { new: true, runValidators: true }
    );
    if (!updatedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json(updatedRoute);
  } catch (error) {
    res.status(500).json({ message: "Error updating route", error: error.message });
  }
};

// Delete a route by ID
export const deleteRoute = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRoute = await Route.findByIdAndDelete(id);
    if (!deletedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json({ message: "Route deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting route", error: error.message });
  }
};
