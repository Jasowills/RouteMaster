import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routeRouter from "./routers/routeRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routers
app.use("/routes", routeRouter);
app.get("/", (req, res) => {
    res.send("Hello");
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
