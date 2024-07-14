// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

// Dummy authentication function, replace with real authentication logic
const isAuthenticated = () => {
  // Add logic to check if user is authenticated
  return true; // Change to actual authentication check
};

// Dummy permission check function, replace with real permission logic
const hasPermission = (permission) => {
  // Add logic to check user permissions
  return true; // Change to actual permission check
};

const PrivateRoute = ({ element, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated() ? element : <Navigate to="/login" />}
  />
);

const PermissionRoute = ({ element, permission, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated() && hasPermission(permission) ? element : <Navigate to="/login" />}
  />
);

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Example of a route that requires authentication */}
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Example of a route that requires specific permission */}
        {/* <Route path="/admin" element={<Dashboard />} permission="admin" /> */}
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
