
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-pattern min-h-screen flex flex-col justify-center">
      <div className="container px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Connecting Mentors</span> & Future Tech Leaders
            </h1>
            <p className="text-lg max-w-lg">
              Join the MUST Alumni Committee platform where experienced professionals guide aspiring tech talents through mentorship, project collaboration, and networking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/mentors">Find a Mentor</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>✓ 1000+ Alumni</span>
              <span>✓ 500+ Successful Mentorships</span>
              <span>✓ 200+ Projects</span>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -left-10 top-10 w-64 h-64 bg-must-teal/20 rounded-full filter blur-2xl"></div>
            <div className="absolute -right-10 bottom-10 w-64 h-64 bg-must-blue/20 rounded-full filter blur-2xl"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-must-blue rounded-full flex items-center justify-center text-white font-bold">MJ</div>
                <div>
                  <h3 className="font-semibold">Michael Jordan</h3>
                  <p className="text-sm text-muted-foreground">AI Engineer @ Google</p>
                </div>
              </div>
              <p className="text-sm mb-6">
                "The MUST mentorship program helped me refine my AI skills and connected me with industry leaders who guided my career path. Now, I'm paying it forward."
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-must-blue-light/30 p-3 rounded-lg text-center">
                  <div className="font-bold text-must-blue">12</div>
                  <div className="text-xs">Mentees</div>
                </div>
                <div className="bg-must-teal-light/30 p-3 rounded-lg text-center">
                  <div className="font-bold text-must-teal">8</div>
                  <div className="text-xs">Projects</div>
                </div>
                <div className="bg-must-blue-light/30 p-3 rounded-lg text-center">
                  <div className="font-bold text-must-blue">4.9</div>
                  <div className="text-xs">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
