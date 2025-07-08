
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Search, MessageSquare, Calendar, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorMatching = () => {
  const matchingSteps = [
    {
      step: 1,
      title: "Complete Your Profile",
      description: "Tell us about your interests, goals, and preferred areas of learning.",
      icon: <User className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Our Algorithm Works",
      description: "We analyze your profile and match you with compatible mentors based on expertise and availability.",
      icon: <Search className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Review Matches",
      description: "Browse through your personalized mentor recommendations and their profiles.",
      icon: <Star className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Connect & Start",
      description: "Send a connection request and begin your mentorship journey.",
      icon: <MessageSquare className="h-8 w-8" />
    }
  ];

  const features = [
    "Smart matching algorithm based on skills, interests, and goals",
    "Filter mentors by expertise, industry, and availability",
    "View detailed mentor profiles with experience and reviews",
    "Direct messaging system for initial contact",
    "Schedule introductory calls seamlessly",
    "Track your mentorship applications and responses"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Mentor Matching</h1>
              <p className="text-xl text-must-blue-light mb-8">
                Our advanced matching system connects you with the perfect mentor based on your goals, interests, and learning style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/register">Find Your Mentor</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-must-blue-dark">
                  <Link to="/mentors">Browse All Mentors</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Mentor Matching Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our intelligent system makes finding the right mentor simple and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {matchingSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-must-blue/10 rounded-full w-fit">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 bg-must-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Powerful Matching Features</h2>
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
                    <Link to="/register">Get Started Today</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-must-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold">95% Match Success Rate</h3>
                        <p className="text-sm text-muted-foreground">Based on user satisfaction surveys</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-must-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Average 3-Day Response</h3>
                        <p className="text-sm text-muted-foreground">Most mentors respond within 72 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how our matching system has helped others achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Banda",
                role: "Software Developer",
                story: "Found my perfect mentor in web development. Now working at a leading tech company in Lilongwe!",
                tags: ["Web Development", "Career Growth"]
              },
              {
                name: "James Phiri",
                role: "Data Scientist",
                story: "The matching system connected me with an AI expert who guided me through my machine learning journey.",
                tags: ["Data Science", "Machine Learning"]
              },
              {
                name: "Grace Mwale",
                role: "UI/UX Designer",
                story: "My mentor helped me build a portfolio that landed me my dream job at a design agency.",
                tags: ["UI/UX Design", "Portfolio"]
              }
            ].map((story, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{story.story}"</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-must-blue/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Mentor?</h2>
            <p className="text-xl text-must-blue-light mb-8 max-w-2xl mx-auto">
              Join hundreds of young Malawians who have already found their mentors and are building successful tech careers.
            </p>
            <Button asChild size="lg" className="bg-white text-must-blue-dark hover:bg-gray-100">
              <Link to="/register">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentorMatching;
