import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';

const ProtectedRoute = ({ children, requiredRole = null, requiredRoles = [] }) => {
  const { isAuthenticated, user } = useAuth();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If no user data, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check for specific role requirement
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Check for multiple role requirements
  if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
