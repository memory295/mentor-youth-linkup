
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MenteeActiveProjects = () => {
  const projects = [
    { title: "React Portfolio", mentor: "Jane Doe", progress: 75, tasks: "8/12 completed" },
    { title: "User Authentication API", mentor: "Michael Johnson", progress: 45, tasks: "3/8 completed" },
    { title: "Mobile App UI Design", mentor: "Sarah Wilson", progress: 20, tasks: "2/10 completed" }
  ];

  return (
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
          {projects.map((project, index) => (
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
  );
};

export default MenteeActiveProjects;
