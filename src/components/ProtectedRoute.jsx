import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProtectedRoute = ({ component: Component }) => {
    const { auth } = useContext(AuthContext);

    return auth.isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
