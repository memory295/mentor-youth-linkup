
import { ReactNode } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
  role: 'admin' | 'mentor' | 'mentee';
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-muted/20">
      <DashboardSidebar role={role} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader role={role} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
