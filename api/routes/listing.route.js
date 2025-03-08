import express from "express"; // Import Express framework  
import { verifyToken } from "../utils/verifyUser.js"; // Import middleware to verify user authentication  
import { createListing, deleteListing, updateListing, getListing, getListings } from "../controllers/listing.controller.js"; // Import listing-related controller functions  

const router = express.Router(); // Create a new router instance  

router.post("/create", verifyToken, createListing); // Route to create a new listing (Requires authentication)  
router.delete("/delete/:id", verifyToken, deleteListing); // Route to delete a listing by ID (Requires authentication)  
router.post("/update/:id", verifyToken, updateListing); // Route to update a listing by ID (Requires authentication)  
router.get("/get/:id", getListing); // Route to get a single listing by ID  
router.get("/get", getListings); // Route to get all listings  

export default router; // Export the router  
