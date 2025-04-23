
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MenteeUpcomingSessions from '@/components/mentee/MenteeUpcomingSessions';

const MenteeSessions = () => {
  return (
    <DashboardLayout role="mentee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Sessions</h1>
          <p className="text-muted-foreground">Manage your mentorship sessions</p>
        </div>
        
        <MenteeUpcomingSessions />
      </div>
    </DashboardLayout>
  );
};

export default MenteeSessions;
