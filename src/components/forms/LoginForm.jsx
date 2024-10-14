import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


function Login() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}auth/login`, { username, password });

      if (response.data.error) {
        toast.error(response.data.error.message);
      } else {
        const { token } = response.data.success; // Assume response contains token and user details

        // Store the token and user details in localStorage/sessionStorage
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);

        toast.success('Login Successful.');

        // Redirect to dashboard or lobby after a second
        setTimeout(() => {
          navigate('/lobby');
        }, 1000);

        // Reset the form
        setFormData({
          username: '',
          password: '',
        });
      }
    } catch (error) {
      handleLoginError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginError = (error) => {
    if (error.response) {
      if (error.response.status === 404) {
        toast.error('Account does not exist. Try Signing Up');
      } else if (error.response.status === 409) {
        toast.error('Incorrect password');
      } else {
        toast.error('An error occurred on the server. Try again later.');
      }
    } else if (error.request) {
      toast.error('Internal server error. Try again later.');
    } else {
      toast.error('An error occurred. Check your internet connection or try again later.');
    }
  };

  return (
    <div className="text-white p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogIn}>
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
        <div className="relative mb-6">
          <input
            type={showPassword ? 'text' : 'password'}
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
            <Icon icon={showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} className="text-gold " />
          </span>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-gold text-gray-900 py-2 rounded-lg transition-all duration-200"
        >
          {loading ? 'Please wait...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
