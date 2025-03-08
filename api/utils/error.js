export const errorHandler = (statusCode, message) => {  
    const error = new Error(); // Create a new error object  
    error.statusCode = statusCode; // Set the error status code  
    error.message = message; // Set the error message  
    return error; // Return the error object  
}
