import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Icon } from '@iconify/react'; // Assuming you are using Iconify

const strongPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

function SignUp() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    setLoading(true);

    if (!strongPasswordRegex.test(password)) {
      setFormErrors({
        confirmPassword: 'Password must be at least 6 characters long and include at least one letter, one number, and one special character.',
      });
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setFormErrors({
        confirmPassword: 'Passwords do not match',
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(API_BASE_URL + 'auth/signup', { username, email, password });

      if (response.data.success && response.data.success.code === 201) {
        toast.success('Sign Up Successful');
      } else {
        toast.error('Sign Up Unsuccessful');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.status);
        if (error.response.status === 400) {
          toast.error(error.response.data.error);
        } else if (error.response.status === 409) {
          toast.error('The email or username is already registered.');
        } else {
          toast.error('An error occurred on the server. Try again later.');
        }
      } else if (error.request) {
        toast.error('Internal Server error. Try again later.');
      } else {
        toast.error('An error occurred. Please check your internet connection or try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent text-white p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full px-3 py-2 rounded-lg bg-transparent border border-white focus:border-gold focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-3 py-2 rounded-lg bg-transparent border border-white focus:border-gold focus:outline-none"
            required
          />
        </div>
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-3 py-2 rounded-lg bg-transparent border border-white focus:border-gold focus:outline-none"
            required
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <Icon icon={showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} className="text-xl" />
          </span>
        </div>
        <div className="mb-6">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password type
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm password"
            className="w-full px-3 py-2 rounded-lg bg-transparent border border-white focus:border-gold focus:outline-none"
            required
          />
          {formErrors.confirmPassword && <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 rounded-lg transition-all duration-200"
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
