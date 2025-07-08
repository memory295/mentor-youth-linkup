
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Users, GitBranch, Calendar, MessageSquare, Trophy, CheckCircle, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCollaboration = () => {
  const collaborationFeatures = [
    {
      title: "Real-World Projects",
      description: "Work on actual industry problems and build solutions that matter.",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Team Formation",
      description: "Join diverse teams with complementary skills and expertise.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "GitHub Integration",
      description: "Seamless version control with direct GitHub repository management.",
      icon: <GitBranch className="h-8 w-8" />
    },
    {
      title: "Mentor Guidance",
      description: "Get direct feedback and guidance from experienced professionals.",
      icon: <MessageSquare className="h-8 w-8" />
    }
  ];

  const projectTypes = [
    {
      title: "AgriTech Solutions",
      description: "Build mobile apps and platforms to help Malawian farmers increase productivity.",
      tech: ["Flutter", "Firebase", "Python"],
      participants: "12 active projects"
    },
    {
      title: "FinTech Applications",
      description: "Develop financial solutions for mobile money and digital banking.",
      tech: ["React", "Node.js", "MongoDB"],
      participants: "8 active projects"
    },
    {
      title: "EdTech Platforms",
      description: "Create educational tools and platforms for remote learning.",
      tech: ["Vue.js", "Django", "PostgreSQL"],
      participants: "15 active projects"
    },
    {
      title: "HealthTech Systems",
      description: "Design health management systems for rural healthcare delivery.",
      tech: ["Angular", "Spring Boot", "MySQL"],
      participants: "6 active projects"
    }
  ];

  const collaborationProcess = [
    {
      step: 1,
      title: "Browse Projects",
      description: "Explore ongoing projects or propose your own innovative ideas."
    },
    {
      step: 2,
      title: "Join a Team",
      description: "Apply to join projects that match your skills and interests."
    },
    {
      step: 3,
      title: "Collaborate",
      description: "Work with teammates using integrated tools and mentor guidance."
    },
    {
      step: 4,
      title: "Deploy & Present",
      description: "Launch your project and present to industry professionals."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Project Collaboration Platform</h1>
              <p className="text-xl text-must-blue-light mb-8">
                Work on real-world projects with direct guidance from industry experts and GitHub integration. Build your portfolio while solving actual problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/register">Join a Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-must-blue-dark">
                  <Link to="/mentor/projects">Browse Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Collaboration Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to work effectively on team projects with professional guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-must-blue/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Types */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Project Categories</h2>
              <p className="text-lg text-muted-foreground">
                Explore different types of projects across various tech domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="bg-must-blue/5">
                        {project.participants}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-must-blue/10 text-must-blue">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Project Collaboration Works</h2>
            <p className="text-lg text-muted-foreground">
              From idea to deployment, here's how our collaborative process works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {collaborationProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 bg-must-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Integration */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Integrated Development Tools</h2>
              <p className="text-lg text-muted-foreground">
                Work with industry-standard tools and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-must-blue/10 rounded-md">
                    <Github className="h-6 w-6 text-must-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">GitHub Integration</h3>
                    <p className="text-muted-foreground">Direct repository access with automated project setup and branch management.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-must-blue/10 rounded-md">
                    <Calendar className="h-6 w-6 text-must-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Project Planning</h3>
                    <p className="text-muted-foreground">Built-in task management with deadlines, milestones, and progress tracking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-must-blue/10 rounded-md">
                    <MessageSquare className="h-6 w-6 text-must-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Team Communication</h3>
                    <p className="text-muted-foreground">Integrated chat, video calls, and code review tools for seamless collaboration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-must-blue/10 rounded-md">
                    <Trophy className="h-6 w-6 text-must-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Recognition System</h3>
                    <p className="text-muted-foreground">Earn badges and certificates for completed projects and contributions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Project Success Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Active projects</span>
                    <span className="font-semibold text-2xl text-must-blue">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Completed projects</span>
                    <span className="font-semibold text-2xl text-must-blue">128</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Participants</span>
                    <span className="font-semibold text-2xl text-must-blue">340</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Success rate</span>
                    <span className="font-semibold text-2xl text-must-blue">89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-xl text-must-blue-light mb-8 max-w-2xl mx-auto">
              Join a project team today and start building real solutions while learning from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-must-blue-dark hover:bg-gray-100">
                <Link to="/register">Join as Mentee</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-must-blue-dark">
                <Link to="/register">Become a Mentor</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCollaboration;
