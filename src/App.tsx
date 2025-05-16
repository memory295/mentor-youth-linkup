
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Mentors from "./pages/Mentors";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Onboarding Pages
import MentorOnboarding from "./pages/onboarding/MentorOnboarding";
import MentorOnboardingDemo from "./pages/onboarding/MentorOnboardingDemo";
import MenteeOnboarding from "./pages/onboarding/MenteeOnboarding";
import MenteeOnboardingDemo from "./pages/onboarding/MenteeOnboardingDemo";

// Mentor Pages
import MentorDashboard from "./pages/mentor/MentorDashboard";
import MentorProfile from "./pages/mentor/MentorProfile";
import MentorProjects from "./pages/mentor/MentorProjects";

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
import AdminSessions from "./pages/admin/AdminSessions";
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
          <Route path="/about" element={<About />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Onboarding Routes */}
          <Route path="/onboarding/mentor" element={<MentorOnboarding />} />
          <Route path="/onboarding/mentor/demo" element={<MentorOnboardingDemo />} />
          <Route path="/onboarding/mentee" element={<MenteeOnboarding />} />
          <Route path="/onboarding/mentee/demo" element={<MenteeOnboardingDemo />} />
          
          {/* Mentor Routes */}
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
          <Route path="/mentor/profile" element={<MentorProfile />} />
          <Route path="/mentor/projects" element={<MentorProjects />} />
          
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
          <Route path="/admin/sessions" element={<AdminSessions />} />
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
