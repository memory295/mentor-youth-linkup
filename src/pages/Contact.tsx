
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, MessageSquare, Calendar, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl max-w-2xl mx-auto text-must-blue-light">
                Have questions or want to get involved? Reach out to the MUST Alumni Committee for Youth.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="container px-4 md:px-6 mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6} 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Get in touch with our team through these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-must-blue/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-must-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">info@mustalumni.org</p>
                      <p className="text-sm text-gray-500 mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-must-teal/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-must-teal" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600">MUST University, Tech Campus</p>
                      <p className="text-sm text-gray-500 mt-1">Limbe, Malawi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-must-blue-dark/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-must-blue-dark" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+123-456-7890</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>How to Get Involved</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-must-blue" />
                    <span>Become a mentor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-must-teal" />
                    <span>Partner with us</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-must-blue-dark" />
                    <span>Sponsor an event</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <a href="/register">Join Our Community</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">
                Find quick answers to common questions about our program.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "How can I join as a mentor?",
                  a: "You can register as a mentor through our registration form and complete the onboarding process. We'll review your application and get back to you."
                },
                {
                  q: "What kind of support do mentees receive?",
                  a: "Mentees receive one-on-one guidance, access to resources, networking opportunities, and support with technical projects."
                },
                {
                  q: "Are there any fees to participate?",
                  a: "No, our mentorship program is completely free for both mentors and mentees thanks to support from our partners."
                },
                {
                  q: "How long does the mentorship program last?",
                  a: "Our standard program runs for 3 months, but mentors and mentees can choose to extend their relationship if both parties agree."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Don't see your question here?
              </p>
              <Button asChild>
                <a href="#top">Contact Us Directly</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
