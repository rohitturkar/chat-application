import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Login from "../../Assests/login.svg"
const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
   
      <div className="grid grid-cols-12  min-h-screen">
        <div className="lg:flex hidden justify-center items-center   lg:col-span-7 h-full bg-gray-900">

          <img src={Login} className='w-[400px] h-[400px]'/>
         
        </div>

        <div className="col-span-12 lg:col-span-5   overflow-hidden  py-8 lg:p-8">
          <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
              <p className="mt-2 text-gray-600">
                Please sign in to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5 text-gray-400" />
                    ) : (
                      <FaRegEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/sign-up"
                  className="font-medium text-blue-600 hover:text-blue-500"
                 
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default SignInPage;
