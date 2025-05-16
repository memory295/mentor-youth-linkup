
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, Code, Video, FileText, Download, Search } from 'lucide-react';
import { useState } from 'react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const resourceCategories = [
    { id: "all", name: "All Resources" },
    { id: "tutorials", name: "Tutorials", icon: <Book className="h-4 w-4" /> },
    { id: "code", name: "Code Samples", icon: <Code className="h-4 w-4" /> },
    { id: "videos", name: "Video Lectures", icon: <Video className="h-4 w-4" /> },
    { id: "documents", name: "Documents", icon: <FileText className="h-4 w-4" /> }
  ];

  const resourcesData = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript in this comprehensive tutorial.",
      category: "tutorials",
      tags: ["Web Development", "Beginner", "HTML", "CSS", "JavaScript"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "React Hooks Cheatsheet",
      description: "Quick reference guide for all React hooks with examples and best practices.",
      category: "code",
      tags: ["React", "JavaScript", "Frontend"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Python for Data Science",
      description: "Introduction to using Python for data analysis and visualization.",
      category: "tutorials",
      tags: ["Python", "Data Science", "Pandas"],
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "Building REST APIs with Node.js",
      description: "Complete video series on creating RESTful APIs using Node.js and Express.",
      category: "videos",
      tags: ["Node.js", "API", "Backend", "JavaScript"],
      link: "#",
      featured: true
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      description: "Guide to creating user-friendly and visually appealing interfaces.",
      category: "documents",
      tags: ["UI/UX", "Design", "User Experience"],
      link: "#",
      featured: false
    },
    {
      id: 6,
      title: "Git & GitHub Tutorial",
      description: "Learn version control basics with Git and GitHub collaboration workflows.",
      category: "tutorials",
      tags: ["Git", "GitHub", "Version Control"],
      link: "#",
      featured: false
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals",
      description: "Introduction to key concepts in machine learning with Python examples.",
      category: "videos",
      tags: ["Machine Learning", "Python", "AI"],
      link: "#",
      featured: true
    },
    {
      id: 8,
      title: "Database Design Best Practices",
      description: "Learn how to design efficient and scalable database schemas.",
      category: "documents",
      tags: ["Databases", "SQL", "Architecture"],
      link: "#",
      featured: false
    },
    {
      id: 9,
      title: "React Component Patterns",
      description: "Code examples showing different patterns for React components.",
      category: "code",
      tags: ["React", "JavaScript", "Frontend", "Patterns"],
      link: "#",
      featured: false
    },
    {
      id: 10,
      title: "Cybersecurity Basics",
      description: "Introduction to essential cybersecurity concepts and practices.",
      category: "documents",
      tags: ["Security", "Cybersecurity", "Best Practices"],
      link: "#",
      featured: false
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'tutorials':
        return <Book className="h-5 w-5" />;
      case 'code':
        return <Code className="h-5 w-5" />;
      case 'videos':
        return <Video className="h-5 w-5" />;
      case 'documents':
        return <FileText className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const filteredResources = resourcesData.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-must-blue-dark text-white py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h1>
              <p className="text-xl max-w-2xl mx-auto text-must-blue-light">
                Access our curated collection of tutorials, guides, code samples, and videos to help you excel in your tech journey.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Resources Section */}
        <div className="container px-4 md:px-6 mx-auto py-12">
          {/* Search */}
          <div className="max-w-lg mx-auto mb-10">
            <div className="flex items-center border rounded-md p-2 bg-background shadow-sm">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <Input 
                type="text" 
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 flex-1"
              />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSearchQuery('')}
                  className="h-auto py-1 px-2"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Featured Resources */}
          {searchQuery === '' && (
            <>
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resourcesData
                    .filter(resource => resource.featured)
                    .map(resource => (
                      <Card key={resource.id} className="h-full hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between mb-1">
                            <div className="p-2 bg-must-blue/10 rounded-md">
                              {getCategoryIcon(resource.category)}
                            </div>
                            <Badge variant="outline" className="bg-must-blue/5">
                              {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mt-2">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{resource.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {resource.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="bg-must-blue/10 hover:bg-must-blue/20 text-must-blue border-0">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button className="w-full" asChild>
                            <a href={resource.link}>
                              <Download className="mr-2 h-4 w-4" /> Access Resource
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </>
          )}

          {/* All Resources with Tabs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{searchQuery ? 'Search Results' : 'All Resources'}</h2>
            {searchQuery ? (
              <div className="mb-4">
                <p className="text-gray-600">Found {filteredResources.length} resources matching "{searchQuery}"</p>
              </div>
            ) : (
              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  {resourceCategories.map(category => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                      {category.icon}
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {resourceCategories.map(category => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {resourcesData
                        .filter(resource => category.id === 'all' || resource.category === category.id)
                        .map(resource => (
                          <Card key={resource.id} className="h-full hover:shadow-md transition-shadow">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between mb-1">
                                <div className="p-2 bg-must-blue/10 rounded-md">
                                  {getCategoryIcon(resource.category)}
                                </div>
                                <Badge variant="outline" className="bg-must-blue/5">
                                  {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl mt-2">{resource.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{resource.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {resource.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="bg-must-blue/10 hover:bg-must-blue/20 text-must-blue border-0">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <Button className="w-full" asChild>
                                <a href={resource.link}>
                                  <Download className="mr-2 h-4 w-4" /> Access Resource
                                </a>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            )}

            {/* Search Results */}
            {searchQuery && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map(resource => (
                  <Card key={resource.id} className="h-full hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="p-2 bg-must-blue/10 rounded-md">
                          {getCategoryIcon(resource.category)}
                        </div>
                        <Badge variant="outline" className="bg-must-blue/5">
                          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mt-2">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-must-blue/10 hover:bg-must-blue/20 text-must-blue border-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full" asChild>
                        <a href={resource.link}>
                          <Download className="mr-2 h-4 w-4" /> Access Resource
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {searchQuery && filteredResources.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search query or browse all resources instead.</p>
                <Button onClick={() => setSearchQuery('')}>View All Resources</Button>
              </div>
            )}
          </div>

          {/* Contribute Section */}
          <div className="mt-16 bg-must-blue/5 p-8 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Have a Resource to Share?</h2>
              <p className="mb-6">
                We welcome contributions from our community. If you have tutorials, code samples, or other resources that would benefit others, please consider sharing them.
              </p>
              <Button asChild size="lg">
                <a href="/contact">Submit a Resource</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
