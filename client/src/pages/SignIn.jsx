import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch,  useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";

const SignIn = () => {

  const [formData, setFormData] = useState({});  
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-6">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-blue-600 text-white p-2 rounded-lg uppercase font-semibold hover:bg-blue-700 transition duration-300 disabled:bg-blue-400"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>

        <div className="flex justify-between font-semibold items-center mt-5">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/sign-up" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </div>

        {error && <p className="text-red-500 font-semibold text-center mt-5">{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;