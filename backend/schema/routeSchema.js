import mongoose from "mongoose";

const routeSchema = new mongoose.Schema(
  {
    routeName: {
      type: String,
      required: [true, "Route name is required"],
    },
    driver: {
      type: String,
      required: [true, "Driver name is required"],
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      required: [true, "Status is required"],
    },
    details: {
      type: String,
      required: [true, "Details are required"],
    },
  },
  {
    timestamps: true, 
  }
);

const Route = mongoose.model("Route", routeSchema);

export default Route;
