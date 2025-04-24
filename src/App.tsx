import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Onboarding Pages
import MentorOnboarding from "./pages/onboarding/MentorOnboarding";

// Mentor Pages
import MentorDashboard from "./pages/mentor/MentorDashboard";

// Mentee Pages
import MenteeDashboard from "./pages/mentee/MenteeDashboard";
import MenteeMentors from "./pages/mentee/MenteeMentors";
import MenteeMessages from "./pages/mentee/MenteeMessages";
import MenteeSessions from "./pages/mentee/MenteeSessions";
import MenteeProfile from "./pages/mentee/MenteeProfile";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminReports from "./pages/admin/AdminReports";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Onboarding Routes */}
          <Route path="/onboarding/mentor" element={<MentorOnboarding />} />
          
          {/* Mentor Routes */}
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
          
          {/* Mentee Routes */}
          <Route path="/mentee/dashboard" element={<MenteeDashboard />} />
          <Route path="/mentee/mentors" element={<MenteeMentors />} />
          <Route path="/mentee/messages" element={<MenteeMessages />} />
          <Route path="/mentee/sessions" element={<MenteeSessions />} />
          <Route path="/mentee/profile" element={<MenteeProfile />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          
          {/* Catch-all route (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
