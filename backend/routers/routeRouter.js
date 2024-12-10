import express from "express";
import {
  getRoutes,
  getRouteById,
  addRoute,
  updateRoute,
  deleteRoute,
} from "../controllers/routeController.js";

const router = express.Router();

// GET all routes
router.get("/", getRoutes);

// GET a single route by ID
router.get("/:id", getRouteById);

// POST a new route
router.post("/", addRoute);

// PUT (update) a route by ID
router.put("/:id", updateRoute);

// DELETE a route by ID
router.delete("/:id", deleteRoute);

export default router;
