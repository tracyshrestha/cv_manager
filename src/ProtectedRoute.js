// src/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  // const [token, setToken] = useState()
  // useEffect(()=>{
  //   setToken(localStorage.getItem('token'))
  // }, [])

  return localStorage.getItem('token') ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
