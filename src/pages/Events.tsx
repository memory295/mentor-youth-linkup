
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, ChevronRight } from 'lucide-react';

const Events = () => {
  const eventCategories = [
    { id: "all", name: "All Events" },
    { id: "upcoming", name: "Upcoming" },
    { id: "workshops", name: "Workshops" },
    { id: "webinars", name: "Webinars" },
    { id: "networking", name: "Networking" }
  ];

  const eventsList = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Intensive 2-day workshop on modern web development with React and Node.js.",
      date: "June 10-11, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "MUST Campus, Limbe",
      type: "workshops",
      attendees: 30,
      featured: true,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Tech Career Panel",
      description: "Join industry experts for insights on navigating your tech career in Malawi and beyond.",
      date: "June 25, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual",
      type: "webinars",
      attendees: 150,
      featured: true,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Data Science Workshop",
      description: "Hands-on workshop introducing Python for data analysis and visualization.",
      date: "July 15, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "MUST Innovation Hub, Limbe",
      type: "workshops",
      attendees: 25,
      featured: false,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Alumni Networking Mixer",
      description: "Connect with fellow MUST alumni and industry professionals in tech.",
      date: "July 28, 2025",
      time: "6:30 PM - 9:00 PM",
      location: "Ryalls Hotel, Blantyre",
      type: "networking",
      attendees: 100,
      featured: true,
      status: "upcoming"
    },
    {
      id: 5,
      title: "AI in Healthcare Webinar",
      description: "Exploring the applications of artificial intelligence in healthcare across Africa.",
      date: "August 5, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual",
      type: "webinars",
      attendees: 200,
      featured: false,
      status: "upcoming"
    },
    {
      id: 6,
      title: "Hackathon: Tech for Community",
      description: "48-hour hackathon focused on developing solutions for local community challenges.",
      date: "August 20-22, 2025",
      time: "Starts at 9:00 AM",
      location: "mHub, Lilongwe",
      type: "workshops",
      attendees: 50,
      featured: true,
      status: "upcoming"
    },
    {
      id: 7,
      title: "Mobile App Development Workshop",
      description: "Learn to build cross-platform mobile apps with React Native.",
      date: "September 8, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "MUST Campus, Limbe",
      type: "workshops",
      attendees: 30,
      featured: false,
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h1>
              <p className="text-xl max-w-2xl mx-auto text-must-blue-light">
                Join our workshops, webinars, and networking events to learn, connect, and grow with our community.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="container px-4 md:px-6 mx-auto py-12">
          <h2 className="text-2xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventsList.filter(event => event.featured).slice(0, 2).map(event => (
              <Card key={event.id} className="overflow-hidden">
                <div className="h-48 bg-must-blue/10 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-must-blue opacity-50" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{event.description}</CardDescription>
                    </div>
                    <Badge variant={event.type === "webinars" ? "secondary" : "default"}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2" />
                      <span>Limited to {event.attendees} attendees</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t">
                  <Button className="w-full">
                    Register Now <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div className="container px-4 md:px-6 mx-auto py-12">
          <h2 className="text-2xl font-bold mb-8">Browse Events</h2>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-8">
              {eventCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {eventCategories.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventsList
                    .filter(event => 
                      category.id === 'all' || 
                      event.type === category.id || 
                      event.status === category.id
                    )
                    .map(event => (
                      <Card key={event.id} className="h-full hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{event.title}</CardTitle>
                            <Badge variant={event.type === "webinars" ? "secondary" : "default"}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                          <CardDescription className="mt-2">{event.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button className="w-full">Register</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
                
                {eventsList.filter(event => 
                  category.id === 'all' || 
                  event.type === category.id || 
                  event.status === category.id
                ).length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No events found</h3>
                    <p className="text-gray-600">Check back later for {category.id} events</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Past Events */}
        <div className="bg-gray-50 py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold mb-8">Past Events</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Introduction to Cybersecurity",
                  date: "May 15, 2025",
                  type: "Workshop",
                  description: "A beginner-friendly workshop covering the basics of cybersecurity and personal data protection."
                },
                {
                  title: "Tech Entrepreneurship Panel",
                  date: "April 28, 2025",
                  type: "Webinar",
                  description: "Successful tech entrepreneurs shared their journeys and insights on building startups in Malawi."
                },
                {
                  title: "Women in Tech Networking Event",
                  date: "March 8, 2025",
                  type: "Networking",
                  description: "Celebrating International Women's Day with inspiring talks and networking opportunities."
                }
              ].map((event, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {event.date} • {event.type}
                        </p>
                        <p className="mt-2 text-sm hidden md:block">{event.description}</p>
                      </div>
                      <p className="md:hidden mt-2 text-sm">{event.description}</p>
                      <Button variant="outline" className="whitespace-nowrap">View Recap</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">View All Past Events</Button>
            </div>
          </div>
        </div>

        {/* Host an Event */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="bg-must-blue/5 p-8 rounded-lg max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Host an Event?</h2>
            <p className="mb-6">
              We welcome proposals for workshops, webinars, and other events that align with our mission of empowering Malawian youth through technology and mentorship.
            </p>
            <Button asChild size="lg">
              <a href="/contact">Submit Event Proposal</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
