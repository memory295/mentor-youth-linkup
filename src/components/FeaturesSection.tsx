
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, Book, List } from 'lucide-react';

const features = [
  {
    icon: <User className="w-6 h-6" />,
    title: 'Mentor Matching',
    description: 'Connect with experienced professionals in your field of interest through our intelligent matching algorithm.'
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: 'Project Collaboration',
    description: 'Work on real-world projects with direct guidance from industry experts and GitHub integration.'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Events & Workshops',
    description: 'Participate in exclusive events, workshops, and networking sessions to expand your knowledge and connections.'
  },
  {
    icon: <List className="w-6 h-6" />,
    title: 'Learning Resources',
    description: 'Access curated learning materials, tutorials, and career guidance provided by our alumni network.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">How Our Platform Works</h2>
          <p className="text-lg text-muted-foreground mb-12">
            MUST Alumni Committee provides a comprehensive system to foster mentorship and collaboration between alumni and youth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition border border-border flex flex-col">
              <div className="h-14 w-14 rounded-full bg-must-blue-light/30 flex items-center justify-center text-must-blue mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow mb-4">{feature.description}</p>
              <Button variant="link" className="p-0 justify-start text-must-blue" asChild>
                <Link to={`/features/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn more
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
