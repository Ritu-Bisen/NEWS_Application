import React from 'react';
import { Navigate } from 'react-router';
import { UserAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { session, loading } = UserAuth();

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>; // or a spinner
  }

  if (!session) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
