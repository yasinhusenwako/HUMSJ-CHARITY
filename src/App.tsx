import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

// Donor Dashboard
import DashboardHome from "./pages/donor/DashboardHome";
import MySubscription from "./pages/donor/MySubscription";
import DonationHistory from "./pages/donor/DonationHistory";
import DonationMethods from "./pages/donor/DonationMethods";
import IslamicInspiration from "./pages/donor/IslamicInspiration";
import ProfileSettings from "./pages/donor/ProfileSettings";

// Admin Dashboard
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Donor Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/subscription"
              element={
                <ProtectedRoute>
                  <MySubscription />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/history"
              element={
                <ProtectedRoute>
                  <DonationHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/methods"
              element={
                <ProtectedRoute>
                  <DonationMethods />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/inspiration"
              element={
                <ProtectedRoute>
                  <IslamicInspiration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <ProtectedRoute>
                  <ProfileSettings />
                </ProtectedRoute>
              }
            />

            {/* Admin Dashboard Route */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
