// src/axiosInstance.js

import axios from 'axios';

// Function to get CSRF token from cookies or local storage
const getCSRFToken = () => {
  // Example: Retrieve CSRF token from cookies or any other storage
  const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrfToken='));
  return token ? token.split('=')[1] : null;
};

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'https://swcstgbe.cellapp.co/', // Replace with your API base URL if different
  withCredentials: true, // Ensure credentials are sent with cross-origin requests
});

// Add a request interceptor to include CSRF token in headers
axiosInstance.interceptors.request.use(function (config) {
  const csrfToken = getCSRFToken(); // Replace with your function to get CSRF token from storage or state
  if (csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance;
