
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MenteeMessages = () => {
  return (
    <DashboardLayout role="mentee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Chat with your mentors and peers</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
            <CardDescription>Your conversations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">Coming soon: Messaging features</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MenteeMessages;
