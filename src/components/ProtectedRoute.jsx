// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProtectedRoute = () => {
    const { authToken } = useContext(AuthContext);
    const location = useLocation();

    return authToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
