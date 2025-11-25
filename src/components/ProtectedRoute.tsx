import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/auth" replace />;
  }

  // Check if admin access is required
  // In production, you would check custom claims or user role from Firestore
  if (requireAdmin) {
    // For now, check if email is admin email
    const isAdmin = currentUser.email === "admin@humsj.edu.et";
    
    if (!isAdmin) {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
