
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MenteeMentors = () => {
  return (
    <DashboardLayout role="mentee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Mentors</h1>
          <p className="text-muted-foreground">Connect and interact with your mentors</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Available Mentors</CardTitle>
            <CardDescription>Find and connect with mentors in your field</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">Coming soon: Mentor matching and connection features</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MenteeMentors;
