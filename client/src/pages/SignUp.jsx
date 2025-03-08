import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import OAuth from "../components/OAuth";

const SignUp = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      navigate("/sign-in");
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>

      {/* Sign-Up Form */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-gray-700"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-gray-700"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-gray-700"
            id="password"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="bg-gray-900 text-white p-3 rounded-lg uppercase font-semibold hover:opacity-90 disabled:opacity-50 transition duration-300"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>

        <div className="flex justify-between font-semibold items-center mt-5 text-sm">
          <p>Have an account?</p>
          <Link to="/sign-in" className="text-blue-600 font-semibold hover:underline">
            Sign In
          </Link>
        </div>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;