
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { User, Home, Book, Calendar, MessageSquare, Settings, ArrowLeft, ArrowRight, Users, List } from 'lucide-react';

interface SidebarProps {
  role: 'admin' | 'mentor' | 'mentee';
}

const roleBasedLinks = {
  admin: [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, href: '/admin/dashboard' },
    { name: 'Users', icon: <Users className="w-5 h-5" />, href: '/admin/users' },
    { name: 'Projects', icon: <Book className="w-5 h-5" />, href: '/admin/projects' },
    { name: 'Events', icon: <Calendar className="w-5 h-5" />, href: '/admin/events' },
    { name: 'Reports', icon: <List className="w-5 h-5" />, href: '/admin/reports' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, href: '/admin/settings' },
  ],
  mentor: [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, href: '/mentor/dashboard' },
    { name: 'Mentees', icon: <Users className="w-5 h-5" />, href: '/mentor/mentees' },
    { name: 'Projects', icon: <Book className="w-5 h-5" />, href: '/mentor/projects' },
    { name: 'Sessions', icon: <Calendar className="w-5 h-5" />, href: '/mentor/sessions' },
    { name: 'Messages', icon: <MessageSquare className="w-5 h-5" />, href: '/mentor/messages' },
    { name: 'Profile', icon: <User className="w-5 h-5" />, href: '/mentor/profile' },
  ],
  mentee: [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, href: '/mentee/dashboard' },
    { name: 'Mentors', icon: <Users className="w-5 h-5" />, href: '/mentee/mentors' },
    { name: 'Projects', icon: <Book className="w-5 h-5" />, href: '/mentee/projects' },
    { name: 'Sessions', icon: <Calendar className="w-5 h-5" />, href: '/mentee/sessions' },
    { name: 'Messages', icon: <MessageSquare className="w-5 h-5" />, href: '/mentee/messages' },
    { name: 'Profile', icon: <User className="w-5 h-5" />, href: '/mentee/profile' },
  ]
};

const DashboardSidebar = ({ role }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const links = roleBasedLinks[role];

  return (
    <div className={cn(
      "bg-sidebar text-sidebar-foreground h-screen flex flex-col border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        {!collapsed && (
          <Link to="/" className="text-lg font-bold text-sidebar-primary-foreground">
            MUST Alumni
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-sidebar-foreground hover:text-sidebar-primary-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        </Button>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md transition-colors",
                location.pathname === link.href
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              {link.icon}
              {!collapsed && <span className="ml-3">{link.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center" : "space-x-3"
        )}>
          <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground text-sm font-medium">
            {role === 'admin' ? 'A' : role === 'mentor' ? 'M' : 'S'}
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">{role === 'admin' ? 'Admin' : role === 'mentor' ? 'Jane Doe' : 'John Smith'}</span>
              <span className="text-xs text-sidebar-foreground/70">{role.charAt(0).toUpperCase() + role.slice(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
