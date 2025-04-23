
import DashboardLayout from '@/components/DashboardLayout';
import MenteeStats from '@/components/mentee/MenteeStats';
import MenteeActiveProjects from '@/components/mentee/MenteeActiveProjects';
import MenteeUpcomingSessions from '@/components/mentee/MenteeUpcomingSessions';

const MenteeDashboard = () => {
  return (
    <DashboardLayout role="mentee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your mentorship journey.</p>
        </div>
        
        <MenteeStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MenteeActiveProjects />
          <MenteeUpcomingSessions />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MenteeDashboard;
