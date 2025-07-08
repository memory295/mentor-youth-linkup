
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Video, Code, FileText, Download, Users, Star, CheckCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningResources = () => {
  const resourceTypes = [
    {
      title: "Interactive Tutorials",
      description: "Step-by-step guides with hands-on exercises and code examples.",
      icon: <Book className="h-8 w-8" />,
      count: "50+ tutorials",
      examples: ["Web Development Basics", "Python for Beginners", "Database Design"]
    },
    {
      title: "Video Lectures",
      description: "High-quality video content from industry experts and alumni.",
      icon: <Video className="h-8 w-8" />,
      count: "100+ hours",
      examples: ["React Masterclass", "AI Fundamentals", "Mobile App Development"]
    },
    {
      title: "Code Repositories",
      description: "Real project code samples and templates to kickstart your development.",
      icon: <Code className="h-8 w-8" />,
      count: "200+ samples",
      examples: ["GitHub Templates", "Code Snippets", "Project Boilerplates"]
    },
    {
      title: "Career Guides",
      description: "Comprehensive guides for career development and professional growth.",
      icon: <FileText className="h-8 w-8" />,
      count: "30+ guides",
      examples: ["CV Writing", "Interview Prep", "Salary Negotiation"]
    }
  ];

  const learningPaths = [
    {
      title: "Web Development Track",
      description: "Complete path from HTML/CSS basics to full-stack development",
      duration: "6-8 months",
      level: "Beginner to Advanced",
      modules: ["HTML/CSS Foundations", "JavaScript Essentials", "React Framework", "Node.js Backend", "Database Management", "Deployment & DevOps"]
    },
    {
      title: "Data Science Track",
      description: "Learn data analysis, machine learning, and AI applications",
      duration: "4-6 months",
      level: "Intermediate",
      modules: ["Python Programming", "Data Analysis with Pandas", "Machine Learning", "Data Visualization", "AI Applications", "Project Portfolio"]
    },
    {
      title: "Mobile Development Track",
      description: "Build native and cross-platform mobile applications",
      duration: "5-7 months",
      level: "Beginner to Intermediate",
      modules: ["Mobile UI/UX", "React Native", "Flutter Basics", "API Integration", "App Store Publishing", "Monetization Strategies"]
    }
  ];

  const features = [
    "Curated content by industry professionals",
    "Regular updates with latest technologies",
    "Interactive coding exercises and quizzes",
    "Progress tracking and certificates",
    "Community discussion forums",
    "Downloadable resources and cheat sheets",
    "Mobile-friendly access",
    "Offline viewing capabilities"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h1>
              <p className="text-xl text-must-blue-light mb-8">
                Access curated learning materials, tutorials, and career guidance provided by our alumni network. Everything you need to excel in your tech journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/resources">Explore Resources</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-must-blue-dark">
                  <Link to="/register">Start Learning</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Types */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Learning Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse learning materials designed to accommodate different learning styles and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-must-blue/10 rounded-full">
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <Badge variant="outline" className="bg-must-blue/5 mt-1">
                        {type.count}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Popular Resources:</p>
                    {type.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="mr-2 mb-2 bg-must-blue/10 text-must-blue">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Structured Learning Paths</h2>
              <p className="text-lg text-muted-foreground">
                Follow our curated learning paths designed to take you from beginner to professional.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <p className="text-muted-foreground">{path.description}</p>
                    <div className="flex gap-2 pt-2">
                      <Badge variant="outline">{path.duration}</Badge>
                      <Badge variant="secondary">{path.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <p className="font-semibold text-sm">Learning Modules:</p>
                      {path.modules.map((module, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-must-blue flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{module}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6">
                      Start Learning Path
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Our Learning Resources Stand Out</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-must-blue mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/resources">Browse All Resources</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                      <Book className="h-6 w-6 text-must-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">1000+ Resources</h3>
                      <p className="text-sm text-muted-foreground">Tutorials, videos, and guides</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-must-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">2000+ Learners</h3>
                      <p className="text-sm text-muted-foreground">Active community members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-must-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">4.8/5 Rating</h3>
                      <p className="text-sm text-muted-foreground">Based on learner feedback</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-muted-foreground">
                Find resources organized by technology and skill level.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Web Development",
                "Mobile Apps",
                "Data Science",
                "Machine Learning",
                "UI/UX Design",
                "DevOps",
                "Cybersecurity",
                "Blockchain",
                "Cloud Computing",
                "Game Development",
                "IoT",
                "Career Skills"
              ].map((category, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="mb-2 mx-auto w-8 h-8 bg-must-blue/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-must-blue" />
                    </div>
                    <p className="text-sm font-medium">{category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contribution Section */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="bg-must-blue/5 p-8 rounded-lg max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contribute to Our Knowledge Base</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Have expertise to share? Help grow our learning community by contributing tutorials, guides, or resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Submit Resource</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/register">Become a Contributor</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
            <p className="text-xl text-must-blue-light mb-8 max-w-2xl mx-auto">
              Access thousands of resources created by industry professionals and start building the skills you need for a successful tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-must-blue-dark hover:bg-gray-100">
                <Link to="/resources">Explore Resources</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-must-blue-dark">
                <Link to="/register">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningResources;
