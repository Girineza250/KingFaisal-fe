import React from 'react';
import authService from '../componets/Services/authService';
import { Navigate } from 'react-router';

function AdminRoute({ children }) {
    const userRole = authService.getUserRole();
  
    console.log('User Role:', userRole);
  
    return userRole === 'admin' ? children : <Navigate to="/Login" />;
  }
  

export default AdminRoute;