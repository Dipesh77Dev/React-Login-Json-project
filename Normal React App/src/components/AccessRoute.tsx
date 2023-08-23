import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AccessRoute: React.FC<{ path: string }> = ({ path, ...props }) => {
  const userData = JSON.parse(localStorage.getItem('formData') || '{}');
  console.log(userData);
  
  if (userData.name && userData.email && userData.phoneNo) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AccessRoute;
