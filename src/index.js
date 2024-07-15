import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import AuthProvider from './AuthProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
