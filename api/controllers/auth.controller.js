import User from "../models/user.model.js"; // Import the User model  
import { errorHandler } from "../utils/error.js"; // Import custom error handler  
import jwt from "jsonwebtoken"; // Import JWT for token generation  

// User signup function  
export const signup = async (req, res, next) => {  
  const { username, email, password } = req.body; // Extract user details from request body 
  
  const newUser = new User({ username, email, password }); // Store password as plain text (⚠️ NOT SECURE)  

  try {  
    await newUser.save(); // Save user to database  
    res.status(201).json("User created successfully"); // Send success response  
  } catch (error) {  
    next(error); // Pass error to error handling middleware  
  }  
};  

// User signin function  
export const signin = async (req, res, next) => {  
  const { email, password } = req.body; // Extract email and password from request body  

  try {  
    const validUser = await User.findOne({ email }); // Find user by email  
    if (!validUser) return next(errorHandler(404, "User not found")); // If user doesn't exist, send error  

    if (password !== validUser.password) // Direct password comparison  
      return next(errorHandler(401, "Invalid credentials")); // If password is incorrect, send error  

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); // Generate JWT token  
    const { password: pass, ...rest } = validUser._doc; // Exclude password from response  

    res  
      .cookie("access_token", token, { httpOnly: true }) // Set token in cookies  
      .status(200)  
      .json(rest); // Send user data as response  
  } catch (error) {  
    next(error); // Pass error to error handling middleware  
  }  
};  

// Google authentication function  
export const google = async (req, res, next) => {  
  try {  
    const user = await User.findOne({ email: req.body.email }); // Find user by email  

    if (user) {  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // Generate JWT token  
      const { password: pass, ...rest } = user._doc; // Exclude password from response  

      res  
        .cookie("access_token", token, { httpOnly: true }) // Set token in cookies  
        .status(200)  
        .json(rest); // Send user data as response  
    } else {  
      // Generate a random password for new Google user  
      const generatedPassword =  
        Math.random().toString(36).slice(-8) +  
        Math.random().toString(36).slice(-8);  

      // Create a new user  
      const newUser = new User({  
        username:  
          req.body.name.split(" ").join("").toLowerCase() +  
          Math.random().toString(36).slice(-4), // Generate a unique username  
        email: req.body.email,  
        password: generatedPassword, // Store password as plain text (⚠️ NOT SECURE)  
        avatar: req.body.photo,  
      });  

      await newUser.save(); // Save the new user in database  
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET); // Generate JWT token  
      const { password: pass, ...rest } = newUser._doc; // Exclude password from response  

      res  
        .cookie("access_token", token, { httpOnly: true }) // Set token in cookies  
        .status(200)  
        .json(rest); // Send user data as response  
    }  
  } catch (error) {  
    next(error); // Pass error to error handling middleware  
  }  
};  

// User sign-out function  
export const signOut = async (req, res, next) => {    
  try {  
    res.clearCookie('access_token'); // Clear authentication token  
    res.status(200).json("User has been logged out!"); // Send success response  
  } catch (error) {  
    next(error); // Pass error to error handling middleware  
  }  
};  








// Don't Delete this line (The below code is include {Bcrypt hash method}) you need uncomment this code and comment above all code


// import User from "../models/user.model.js"; // Import the User model  
// import bcryptjs from "bcryptjs"; // Import bcryptjs for password hashing  
// import { errorHandler } from "../utils/error.js"; // Import custom error handler  
// import jwt from "jsonwebtoken"; // Import JWT for token generation  

// // User signup function  
// export const signup = async (req, res, next) => {  
//   const { username, email, password } = req.body; // Extract user details from request body 
  
//   const hashedPassword = bcryptjs.hashSync(password, 10);  
//   const newUser = new User({ username, email, password: hashedPassword });  
  


//   try {  
//     await newUser.save(); // Save user to database  
//     res.status(201).json("User created successfully"); // Send success response  
//   } catch (error) {  
//     next(error); // Pass error to error handling middleware  
//   }  
// };  

// // User signin function  
// export const signin = async (req, res, next) => {  
//   const { email, password } = req.body; 

//   try {  
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(404, "User not found")); 

//     const validPassword = bcryptjs.compareSync(password, validUser.password); 
//     if (!validPassword) return next(errorHandler(401, "Invalid credentials")); 

//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);  
//     const { password: pass, ...rest } = validUser._doc; 

//     res  
//       .cookie("access_token", token, { httpOnly: true })
//       .status(200)  
//       .json(rest);   
//   } catch (error) {  
//     next(error); 
//   }  
// };  

// // Google authentication function  
// export const google = async (req, res, next) => {  
//   try {  
//     const user = await User.findOne({ email: req.body.email }); 

//     if (user) {  
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); 
//       const { password: pass, ...rest } = user._doc; 

//       res  
//         .cookie("access_token", token, { httpOnly: true })
//         .status(200)  
//         .json(rest); 
//     } else {  
//       // Generate a random password for new Google user  
//       const generatedPassword =  
//         Math.random().toString(36).slice(-8) +  
//         Math.random().toString(36).slice(-8);  
//       const hashedPassword = bcryptjs.hashSync(generatedPassword, 10); // Hash the generated password  

//       // Create a new user  
//       const newUser = new User({  
//         username:  
//           req.body.name.split(" ").join("").toLowerCase() +  
//           Math.random().toString(36).slice(-4), 
//         email: req.body.email,  
//         password: hashedPassword,  
//         avatar: req.body.photo,  
//       });  

//       await newUser.save(); 
//       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET); 
//       const { password: pass, ...rest } = newUser._doc;   

//       res  
//         .cookie("access_token", token, { httpOnly: true }) // Set token in cookies  
//         .status(200)  
//         .json(rest); // Send user data as response  
//     }  
//   } catch (error) {  
//     next(error); 
//   }  
// };  

// // User sign-out function  
// export const signOut = async (req, res, next) => {    
//   try {  
//     res.clearCookie('access_token');  
//     res.status(200).json("User has been logged out!"); 
//   } catch (error) {  
//     next(error);
//   }  
// };  
