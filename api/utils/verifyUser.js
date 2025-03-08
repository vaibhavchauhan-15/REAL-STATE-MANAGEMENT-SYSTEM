import jwt from "jsonwebtoken";         // Importing JWT for token verification
import { errorHandler } from "./error.js";      // Importing custom error handler

export const verifyToken = (req, res, next) => {  
    const token = req.cookies.access_token;     // Get token from cookies
    if (!token) return next(errorHandler(401, "Unauthorized"));     // If no token, send 401 error

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {   // Verify token using secret key
        if (err) return next(errorHandler(403, "Forbidden"));    // If invalid, send 403 error

        req.user = user;        // Attach decoded user data to request
        next();         // Proceed to next middleware
    });
}
