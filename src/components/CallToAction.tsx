
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-must-blue text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Connect, Mentor, or Get Mentored?
          </h2>
          <p className="text-xl mb-10 text-must-blue-light">
            Join our community of tech professionals and aspiring talents to share knowledge, 
            collaborate on projects, and build meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register?role=mentor">Join as Mentor</Link>
            </Button>
            <Button size="lg" className="bg-white text-must-blue hover:bg-must-blue-light" asChild>
              <Link to="/register?role=mentee">Join as Mentee</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
