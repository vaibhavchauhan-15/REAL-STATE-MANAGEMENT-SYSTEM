import express from "express";
import mongoose from "mongoose";
import { config } from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import path from "path";
import { fileURLToPath } from 'url';

// Load environment variables
config();

// Use environment variables
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const isVercel = process.env.VERCEL === '1';

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

// Handle __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Health check route for Vercel
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', environment: NODE_ENV });
});

// Only start the server if not on Vercel
if (!isVercel) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Handle client routes in production/Vercel
if (NODE_ENV === 'production' || isVercel) {
  const clientPath = path.join(rootDir, 'client', 'dist');
  
  // Serve static files
  app.use(express.static(clientPath));
  
  // For any other routes, serve the index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

// Error handling middleware
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
