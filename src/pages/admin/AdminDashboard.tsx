
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MessageSquare, Book, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and statistics</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <h3 className="text-2xl font-bold">1,532</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-must-teal/10 rounded-full">
                <Users className="h-6 w-6 text-must-teal" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Mentors</p>
                <h3 className="text-2xl font-bold">324</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-must-blue/10 rounded-full">
                <Users className="h-6 w-6 text-must-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Mentees</p>
                <h3 className="text-2xl font-bold">1,208</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-must-blue-dark/10 rounded-full">
                <Book className="h-6 w-6 text-must-blue-dark" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                <h3 className="text-2xl font-bold">245</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Sessions</p>
                <h3 className="text-2xl font-bold">182</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent User Activity</CardTitle>
              <CardDescription>Monitor platform activity and engagement</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/admin/activity">View All Activity</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "Jane Doe", role: "Mentor", action: "created a new project", time: "10 minutes ago" },
                { user: "John Smith", role: "Mentee", action: "connected with a new mentor", time: "30 minutes ago" },
                { user: "Michael Johnson", role: "Mentor", action: "scheduled a mentorship session", time: "1 hour ago" },
                { user: "Sarah Williams", role: "Mentee", action: "submitted project milestone", time: "2 hours ago" },
                { user: "David Chen", role: "Mentor", action: "updated availability calendar", time: "3 hours ago" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-md hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                    {activity.user.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      <span className="font-semibold">{activity.user}</span> 
                      <span className="text-muted-foreground"> ({activity.role})</span> {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reports and Analytics */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Reports & Analytics</CardTitle>
              <CardDescription>Key platform metrics and reports</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/admin/reports">View All Reports</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-2">This month</div>
                  <div className="text-3xl font-bold text-must-blue">+125</div>
                  <div className="text-sm text-green-600 mt-1">↑ 12.3% from last month</div>
                  <Button size="sm" variant="link" className="p-0 h-auto mt-2">
                    <Link to="/admin/reports/user-growth">View trend</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Mentorship Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-2">Active mentorships</div>
                  <div className="text-3xl font-bold text-must-teal">76%</div>
                  <div className="text-sm text-green-600 mt-1">↑ 5.2% from last month</div>
                  <Button size="sm" variant="link" className="p-0 h-auto mt-2">
                    <Link to="/admin/reports/mentorship-rate">View details</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Project Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-2">This month</div>
                  <div className="text-3xl font-bold text-must-blue-dark">37</div>
                  <div className="text-sm text-amber-600 mt-1">↓ 3.8% from last month</div>
                  <Button size="sm" variant="link" className="p-0 h-auto mt-2">
                    <Link to="/admin/reports/project-completion">View details</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Items requiring admin review and action</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/admin/approvals">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Mentor Application", from: "Robert Mills", status: "Pending Review", time: "Submitted 2 days ago" },
                { type: "Event Proposal", from: "Tech Talks Team", status: "Pending Review", time: "Submitted 3 days ago" },
                { type: "Resource Publication", from: "Education Committee", status: "Pending Review", time: "Submitted 4 days ago" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    <List className="h-10 w-10 text-must-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {item.type} from <span className="font-semibold">{item.from}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.status} • {item.time}
                    </p>
                  </div>
                  <Button size="sm">Review</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
