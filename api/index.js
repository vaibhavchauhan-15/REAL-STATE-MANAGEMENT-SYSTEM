import express from "express";
import mongoose from "mongoose";
import { config } from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import path from "path";

// Load environment variables
config();

// Use environment variables
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const isVercel = process.env.VERCEL || false;

console.log("MongoDB URI:", process.env.MONGO);
console.log("Environment:", NODE_ENV);
console.log("Is Vercel:", isVercel);

// Use a local MongoDB connection string
const MONGO_URI = process.env.MONGO || "mongodb://localhost:27017/realEstateDB";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
    // Continue running the server even if MongoDB connection fails
    console.log("Running in development mode without MongoDB connection");
  });

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Only start the server if not on Vercel (Vercel uses serverless functions)
if (!isVercel) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Serve static files in production
if (NODE_ENV === 'production' || isVercel) {
  // Define correct static folder path based on environment
  const staticPath = isVercel ? path.join(__dirname, "client/dist") : path.join(__dirname, "/client/dist");
  app.use(express.static(staticPath));

  app.get("*", (req, res) => {
    const indexPath = isVercel ? path.join(__dirname, "client/dist/index.html") : path.join(__dirname, "client", "dist", "index.html");
    res.sendFile(indexPath);
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Export app for Vercel serverless function
export default app;
