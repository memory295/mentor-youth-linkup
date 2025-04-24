
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const AdminReports = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">View system analytics and reports</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            "User Activity",
            "Project Progress",
            "Session Analytics",
            "Mentorship Impact"
          ].map((report) => (
            <Card key={report}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{report}</h4>
                    <p className="text-sm text-muted-foreground">Last updated: Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;
