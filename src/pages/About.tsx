
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Info, Users, Award, Lightbulb, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Info className="h-12 w-12 mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About MUST Alumni Committee for Youth</h1>
              <p className="text-xl max-w-3xl mx-auto text-must-blue-light">
                A Tech-Focused Leadership Initiative empowering Malawian youth through mentorship, collaboration, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-must-blue-dark">About Us</h2>
                <nav className="space-y-4">
                  <a href="#who-we-are" className="flex items-center text-must-blue hover:text-must-teal transition">
                    <span className="mr-2">→</span> Who We Are
                  </a>
                  <a href="#our-vision" className="flex items-center text-must-blue hover:text-must-teal transition">
                    <span className="mr-2">→</span> Our Vision
                  </a>
                  <a href="#what-we-do" className="flex items-center text-must-blue hover:text-must-teal transition">
                    <span className="mr-2">→</span> What We Do
                  </a>
                  <a href="#our-story" className="flex items-center text-must-blue hover:text-must-teal transition">
                    <span className="mr-2">→</span> Our Story
                  </a>
                  <a href="#the-team" className="flex items-center text-must-blue hover:text-must-teal transition">
                    <span className="mr-2">→</span> The Team
                  </a>
                  <a href="#join-us" className="flex items-center text-must-blue hover:text-must-teal transition">
                    <span className="mr-2">→</span> Join Us
                  </a>
                </nav>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-16">
              <section id="who-we-are" className="scroll-mt-24">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-must-blue mr-2" />
                  <h2 className="text-2xl font-bold text-must-blue-dark">Who We Are</h2>
                </div>
                <p className="text-lg mb-4">
                  We are a group of MUST alumni (Memory Namtunda, Adam Chongoza, Bridget Ibbu) and partners, driven by a shared passion for empowering Malawian youth through technology, mentorship, and leadership.
                </p>
                <p className="text-lg">
                  Supported by Prof. Bennet Kankuzi (MUST) and Madrinha Trust, we bridge the gap between alumni expertise and youth potential.
                </p>
                <div className="mt-8 bg-gray-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Founded</h3>
                  <p>Launched in 2024 with the goal of connecting MUST alumni with youth for technology mentorship and career development.</p>
                </div>
              </section>
              
              <Separator />
              
              <section id="our-vision" className="scroll-mt-24">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-must-teal mr-2" />
                  <h2 className="text-2xl font-bold text-must-blue-dark">Our Vision</h2>
                </div>
                <blockquote className="border-l-4 border-must-teal pl-4 italic text-xl my-6">
                  "To harness the expertise of MUST alumni to mentor and empower youth in tech, fostering innovation, career readiness, and sustainable networks."
                </blockquote>
                <div className="bg-must-teal/10 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Core Values</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Knowledge sharing and continuous learning</li>
                    <li>Innovation and technical excellence</li>
                    <li>Inclusive mentorship</li>
                    <li>Community impact through technology</li>
                  </ul>
                </div>
              </section>
              
              <Separator />
              
              <section id="what-we-do" className="scroll-mt-24">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-must-blue mr-2" />
                  <h2 className="text-2xl font-bold text-must-blue-dark">What We Do</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Mentorship</h3>
                      <p>Pair youth with alumni for skill-building in coding, AI, entrepreneurship, and more.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Collaborative Projects</h3>
                      <p>Develop real-world tech solutions including apps and community initiatives.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Networking</h3>
                      <p>Connect youth to internships and jobs via alumni industry ties.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Visibility</h3>
                      <p>Showcase MUST's impact through success stories and achievements.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
              <Separator />
              
              <section id="our-story" className="scroll-mt-24">
                <div className="flex items-center mb-4">
                  <LinkIcon className="h-6 w-6 text-must-blue mr-2" />
                  <h2 className="text-2xl font-bold text-must-blue-dark">Our Story</h2>
                </div>
                <p className="text-lg mb-4">
                  Inspired by Madrinha Trust and endorsed by Prof. Bennet Kankuzi, we launched this initiative to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>Strengthen the MUST alumni network.</li>
                  <li>Address youth unemployment through tech-driven opportunities.</li>
                  <li>Foster a culture of innovation and leadership.</li>
                </ul>
                <div className="bg-gray-100 rounded-lg p-6">
                  <p className="italic">
                    "This initiative was born from our collective desire to give back to the community that shaped us, 
                    and to ensure that the next generation of tech leaders in Malawi has the guidance and support they need to succeed."
                  </p>
                </div>
              </section>
              
              <Separator />
              
              <section id="the-team" className="scroll-mt-24">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-must-blue mr-2" />
                  <h2 className="text-2xl font-bold text-must-blue-dark">The Team</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-must-blue/20 flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-must-blue">MN</span>
                      </div>
                      <h3 className="text-lg font-semibold">Memory Namtunda</h3>
                      <p className="text-sm text-gray-500">Founding Alumni & Committee Lead</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-must-blue/20 flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-must-blue">AC</span>
                      </div>
                      <h3 className="text-lg font-semibold">Adam Chongoza</h3>
                      <p className="text-sm text-gray-500">Founding Alumni & Committee Lead</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-must-blue/20 flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-must-blue">BI</span>
                      </div>
                      <h3 className="text-lg font-semibold">Bridget Ibbu</h3>
                      <p className="text-sm text-gray-500">Founding Alumni & Committee Lead</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Supporting Team</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-must-teal mr-2"></span>
                      <strong>Prof. Bennet Kankuzi</strong> - MUST Patron
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-must-teal mr-2"></span>
                      <strong>Madrinha Trust Advisors</strong> - Strategic Guidance
                    </li>
                  </ul>
                </div>
              </section>
              
              <Separator />
              
              <section id="join-us" className="scroll-mt-24">
                <div className="flex items-center mb-4">
                  <LinkIcon className="h-6 w-6 text-must-blue mr-2" />
                  <h2 className="text-2xl font-bold text-must-blue-dark">Join Us</h2>
                </div>
                <p className="text-lg mb-6">
                  We invite:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-must-blue/10 p-2 rounded">
                      <Users className="h-5 w-5 text-must-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">MUST Alumni</h3>
                      <p>Volunteer as mentors or advisors.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-must-teal/10 p-2 rounded">
                      <Users className="h-5 w-5 text-must-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Youth</h3>
                      <p>Participate in programs and mentorship opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-must-blue-dark/10 p-2 rounded">
                      <LinkIcon className="h-5 w-5 text-must-blue-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Partners</h3>
                      <p>Sponsor workshops or provide internship opportunities.</p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-must-teal pl-4 italic text-lg my-6">
                  "Together, we're building Malawi's next generation of tech leaders."
                </blockquote>
                <div className="mt-8 flex justify-center">
                  <Button asChild size="lg" className="mr-4">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link to="/register">Join As Mentor</Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
