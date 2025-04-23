
import DashboardLayout from '@/components/DashboardLayout';
import MenteeStats from '@/components/mentee/MenteeStats';
import MenteeActiveProjects from '@/components/mentee/MenteeActiveProjects';

const MenteeDashboard = () => {
  return (
    <DashboardLayout role="mentee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your mentorship journey.</p>
        </div>
        
        <MenteeStats />
        <MenteeActiveProjects />
      </div>
    </DashboardLayout>
  );
};

export default MenteeDashboard;
