
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const Mentors = () => {
  const mentorCategories = [
    { id: "all", name: "All Mentors" },
    { id: "software", name: "Software Development" },
    { id: "data", name: "Data Science & AI" },
    { id: "design", name: "UI/UX Design" },
    { id: "product", name: "Product Management" },
    { id: "cyber", name: "Cybersecurity" }
  ];

  const mentorsData = [
    {
      id: 1,
      name: "Dr. Grace Banda",
      title: "Senior Software Engineer",
      company: "Microsoft",
      categories: ["software"],
      skills: ["React", "Node.js", "AWS"],
      bio: "15+ years experience in full-stack development across multiple industries.",
      availability: "Evenings and weekends"
    },
    {
      id: 2,
      name: "Emmanuel Phiri",
      title: "Data Scientist",
      company: "IBM Research Africa",
      categories: ["data"],
      skills: ["Python", "Machine Learning", "Big Data"],
      bio: "Specializes in applying AI to solve healthcare challenges in Africa.",
      availability: "Tuesday and Thursday afternoons"
    },
    {
      id: 3,
      name: "Chikondi Mbewe",
      title: "Product Design Lead",
      company: "Airtel Africa",
      categories: ["design"],
      skills: ["UI/UX", "Figma", "Design Systems"],
      bio: "Passionate about creating user-centered designs for African markets.",
      availability: "Weekends only"
    },
    {
      id: 4,
      name: "Thoko Mkandawire",
      title: "Product Manager",
      company: "Google",
      categories: ["product"],
      skills: ["Agile", "Market Research", "Growth Strategy"],
      bio: "Helped launch several products in emerging markets across Africa.",
      availability: "Monday and Wednesday evenings"
    },
    {
      id: 5,
      name: "Blessings Chilima",
      title: "Cybersecurity Specialist",
      company: "Deloitte",
      categories: ["cyber"],
      skills: ["Network Security", "Penetration Testing", "Security Audits"],
      bio: "Specializes in helping organizations build robust security frameworks.",
      availability: "Friday afternoons"
    },
    {
      id: 6,
      name: "Tendai Kachale",
      title: "Full Stack Developer",
      company: "TNM",
      categories: ["software"],
      skills: ["JavaScript", "Django", "Database Design"],
      bio: "Experience in building scalable applications for the telecom industry.",
      availability: "Weekday evenings"
    },
    {
      id: 7,
      name: "Mphatso Kamanga",
      title: "AI Researcher",
      company: "University of Malawi",
      categories: ["data"],
      skills: ["Deep Learning", "NLP", "Computer Vision"],
      bio: "Researching AI applications in agriculture and climate resilience.",
      availability: "Flexible schedule"
    },
    {
      id: 8,
      name: "Janet Mvula",
      title: "UX Researcher",
      company: "mHub",
      categories: ["design"],
      skills: ["User Testing", "Wireframing", "Interaction Design"],
      bio: "Passionate about creating accessible digital experiences for all users.",
      availability: "Weekends and evenings"
    }
  ];

  const MentorCard = ({ mentor }) => (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div className="w-20 h-20 bg-must-blue/10 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl font-bold text-must-blue">
                {mentor.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{mentor.name}</h3>
            <p className="text-must-blue-dark">{mentor.title}</p>
            <p className="text-gray-500 text-sm">{mentor.company}</p>
          </div>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {mentor.skills.map((skill, i) => (
              <Badge key={i} variant="outline" className="bg-must-blue/5">
                {skill}
              </Badge>
            ))}
          </div>
          
          <p className="text-sm mb-4 flex-grow">{mentor.bio}</p>
          
          <div className="mt-auto">
            <p className="text-sm text-gray-600 mb-3">
              <strong>Availability:</strong> {mentor.availability}
            </p>
            <Button asChild className="w-full">
              <Link to="/register">Request Mentorship</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Mentors</h1>
              <p className="text-xl max-w-2xl mx-auto text-must-blue-light">
                Connect with experienced professionals who are passionate about helping the next generation of tech leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="container px-4 md:px-6 mx-auto py-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Find Your Perfect Mentor</h2>
            <p className="text-center max-w-3xl mx-auto text-gray-600">
              Our mentors are industry professionals and experts who volunteer their time to help you develop your skills, 
              advance your career, and navigate the tech industry.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {mentorCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mentorsData.map((mentor) => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
              </div>
            </TabsContent>
            
            {mentorCategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mentorsData
                    .filter((mentor) => mentor.categories.includes(category.id))
                    .map((mentor) => (
                      <MentorCard key={mentor.id} mentor={mentor} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Become a Mentor?</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-6">
              Are you a tech professional looking to give back to the community? Join our mentor network and help shape the next generation of tech leaders.
            </p>
            <Button asChild size="lg">
              <Link to="/register">Join As Mentor</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mentors;
