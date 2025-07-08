
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Video, MapPin, Clock, Trophy, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsWorkshops = () => {
  const eventTypes = [
    {
      title: "Technical Workshops",
      description: "Hands-on coding sessions covering the latest technologies and frameworks.",
      icon: <Zap className="h-8 w-8" />,
      examples: ["React Bootcamp", "Python for AI", "Mobile App Development"]
    },
    {
      title: "Industry Webinars",
      description: "Learn from industry experts about trends, career paths, and opportunities.",
      icon: <Video className="h-8 w-8" />,
      examples: ["Tech Career Panel", "Startup Stories", "Remote Work Best Practices"]
    },
    {
      title: "Networking Events",
      description: "Connect with fellow tech enthusiasts, mentors, and potential collaborators.",
      icon: <Users className="h-8 w-8" />,
      examples: ["Alumni Mixer", "Tech Meetup", "Career Fair"]
    },
    {
      title: "Hackathons",
      description: "Intensive coding competitions focused on solving real-world problems.",
      icon: <Trophy className="h-8 w-8" />,
      examples: ["AgriTech Challenge", "FinTech Innovation", "HealthTech Solutions"]
    }
  ];

  const benefits = [
    "Learn cutting-edge technologies from industry experts",
    "Network with like-minded peers and potential mentors",
    "Gain practical experience through hands-on projects",
    "Earn certificates and digital badges for completion",
    "Access exclusive career opportunities and internships",
    "Join a supportive community of tech enthusiasts"
  ];

  const upcomingHighlights = [
    {
      title: "AI & Machine Learning Workshop",
      date: "June 15, 2025",
      type: "Workshop",
      location: "MUST Campus",
      participants: "30 spots",
      level: "Intermediate"
    },
    {
      title: "Tech Entrepreneurship Summit",
      date: "July 20, 2025",
      type: "Conference",
      location: "Virtual",
      participants: "200 spots",
      level: "All Levels"
    },
    {
      title: "Mobile Development Bootcamp",
      date: "August 10-12, 2025",
      type: "Bootcamp",
      location: "mHub Lilongwe",
      participants: "25 spots",
      level: "Beginner"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Events & Workshops</h1>
              <p className="text-xl text-must-blue-light mb-8">
                Participate in exclusive events, workshops, and networking sessions to expand your knowledge and connections in the tech industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/events">Browse All Events</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-must-blue-dark">
                  <Link to="/register">Join Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Events We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From technical workshops to networking events, we offer diverse learning opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-must-blue/10 rounded-full">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Examples:</p>
                    {type.examples.map((example, i) => (
                      <Badge key={i} variant="outline" className="mr-2 mb-2 bg-must-blue/5">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Attend Our Events?</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-must-blue mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link to="/register">Join Our Community</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-must-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold">500+ Participants</h3>
                        <p className="text-sm text-muted-foreground">Across all our events this year</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-must-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold">50+ Events Hosted</h3>
                        <p className="text-sm text-muted-foreground">Workshops, webinars, and networking events</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-must-blue/10 rounded-full flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-must-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold">95% Satisfaction Rate</h3>
                        <p className="text-sm text-muted-foreground">Based on participant feedback</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Highlights */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Featured Events</h2>
            <p className="text-lg text-muted-foreground">
              Don't miss these exciting upcoming events and workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingHighlights.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-must-blue/5">
                      {event.type}
                    </Badge>
                    <Badge variant="secondary" className={`
                      ${event.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                        event.level === 'Intermediate' ? 'bg-orange-100 text-orange-800' : 
                        'bg-blue-100 text-blue-800'}
                    `}>
                      {event.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>

        {/* Event Format Options */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Event Formats</h2>
              <p className="text-lg text-muted-foreground">
                Choose the format that works best for your schedule and learning style.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-must-blue/10 rounded-full w-fit">
                    <MapPin className="h-8 w-8 text-must-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">In-Person Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Hands-on workshops and networking events at MUST campus and partner locations.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Direct interaction with instructors</li>
                    <li>• Networking opportunities</li>
                    <li>• Hands-on lab access</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-must-blue/10 rounded-full w-fit">
                    <Video className="h-8 w-8 text-must-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Virtual Sessions</h3>
                  <p className="text-muted-foreground mb-4">
                    Online webinars and workshops accessible from anywhere in Malawi.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Accessible from anywhere</li>
                    <li>• Recorded for later viewing</li>
                    <li>• Interactive Q&A sessions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-must-blue/10 rounded-full w-fit">
                    <Clock className="h-8 w-8 text-must-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Hybrid Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Combination of in-person and virtual elements for maximum flexibility.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Best of both worlds</li>
                    <li>• Flexible participation</li>
                    <li>• Extended reach</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Skills?</h2>
            <p className="text-xl text-must-blue-light mb-8 max-w-2xl mx-auto">
              Join our community of learners and start attending events that will accelerate your tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-must-blue-dark hover:bg-gray-100">
                <Link to="/events">Browse Events</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-must-blue-dark">
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsWorkshops;
