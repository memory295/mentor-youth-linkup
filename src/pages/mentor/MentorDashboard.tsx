
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MessageSquare, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorDashboard = () => {
  return (
    <DashboardLayout role="mentor">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Jane</h1>
          <p className="text-muted-foreground">Here's what's happening with your mentees and projects.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Mentees</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-must-teal/10 rounded-full">
                <Book className="h-6 w-6 text-must-teal" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-must-blue/10 rounded-full">
                <Calendar className="h-6 w-6 text-must-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming Sessions</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-must-blue-dark/10 rounded-full">
                <MessageSquare className="h-6 w-6 text-must-blue-dark" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Unread Messages</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Mentee Activity */}
        <Card className="col-span-1 lg:col-span-2 xl:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Mentee Activity</CardTitle>
              <CardDescription>Stay updated with your mentees' progress</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/mentor/mentees">View All Mentees</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alex Smith", action: "pushed a new commit to", project: "React Portfolio Project", time: "2 hours ago" },
                { name: "Maria Garcia", action: "completed task", project: "User Authentication Module", time: "5 hours ago" },
                { name: "James Wilson", action: "submitted pull request to", project: "Python Data Analysis", time: "Yesterday" },
                { name: "Sarah Johnson", action: "requested feedback on", project: "Mobile App UI Design", time: "2 days ago" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-md hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                    {activity.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      <span className="font-semibold">{activity.name}</span> {activity.action}{' '}
                      <span className="font-semibold text-must-blue">{activity.project}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentorship sessions</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/mentor/sessions">View Calendar</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { mentee: "Alex Smith", topic: "React Router Implementation", date: "Tomorrow, 3:00 PM", duration: "45 min" },
                { mentee: "Maria Garcia", topic: "Code Review: Authentication System", date: "Apr 25, 4:30 PM", duration: "60 min" },
                { mentee: "James Wilson", topic: "Career Guidance", date: "Apr 26, 10:00 AM", duration: "30 min" }
              ].map((session, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    <Calendar className="h-10 w-10 text-must-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      <span className="font-semibold">{session.mentee}</span>: {session.topic}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {session.date} • {session.duration}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Join</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;
