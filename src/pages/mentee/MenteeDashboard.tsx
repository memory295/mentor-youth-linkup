
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MessageSquare, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenteeDashboard = () => {
  return (
    <DashboardLayout role="mentee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your mentorship journey.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 flex flex-row items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">My Mentors</p>
                <h3 className="text-2xl font-bold">2</h3>
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
                <h3 className="text-2xl font-bold">3</h3>
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
                <h3 className="text-2xl font-bold">2</h3>
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
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>My Projects</CardTitle>
              <CardDescription>Your active mentorship projects</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/mentee/projects">View All Projects</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "React Portfolio", mentor: "Jane Doe", progress: 75, tasks: "8/12 completed" },
                { title: "User Authentication API", mentor: "Michael Johnson", progress: 45, tasks: "3/8 completed" },
                { title: "Mobile App UI Design", mentor: "Jane Doe", progress: 20, tasks: "2/10 completed" }
              ].map((project, index) => (
                <div key={index} className="p-4 border rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{project.title}</h4>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/mentee/projects/${index + 1}`}>View</Link>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Mentor: {project.mentor}</p>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-must-blue h-full rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs">{project.progress}% Complete</span>
                    <span className="text-xs">{project.tasks}</span>
                  </div>
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
              <Link to="/mentee/sessions">View Calendar</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { mentor: "Jane Doe", topic: "React Router Implementation", date: "Tomorrow, 3:00 PM", duration: "45 min" },
                { mentor: "Michael Johnson", topic: "API Authentication Review", date: "Apr 25, 4:30 PM", duration: "60 min" }
              ].map((session, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    <Calendar className="h-10 w-10 text-must-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      <span className="font-semibold">{session.mentor}</span>: {session.topic}
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

        {/* Recommended Mentors */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recommended Mentors</CardTitle>
              <CardDescription>Mentors that match your skills and interests</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/mentee/mentors">Find Mentors</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Sarah Williams", role: "Senior Frontend Developer at Netflix", skills: ["React", "TypeScript", "UI/UX"], available: true },
                { name: "David Chen", role: "Backend Engineer at Amazon", skills: ["Node.js", "Python", "Databases"], available: false },
                { name: "Olivia Martinez", role: "Product Manager at Microsoft", skills: ["Product Strategy", "Agile", "UX Research"], available: true }
              ].map((mentor, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-sm">
                  <div className="bg-gradient-to-r from-must-blue to-must-teal h-12"></div>
                  <CardContent className="pt-0 mt-[-24px]">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lg font-bold border-2 border-white shadow-sm">
                      {mentor.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <h4 className="font-semibold mt-3">{mentor.name}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{mentor.role}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {mentor.skills.map(skill => (
                        <span key={skill} className="text-xs bg-muted px-2 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-xs ${mentor.available ? 'text-green-600' : 'text-amber-600'}`}>
                        {mentor.available ? '● Available now' : '○ Available soon'}
                      </span>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MenteeDashboard;
