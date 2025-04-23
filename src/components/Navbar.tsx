
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = ({ transparent = false }: { transparent?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`w-full z-10 ${transparent ? 'absolute' : 'bg-background shadow-sm'}`}>
      <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold gradient-text">MUST Alumni</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-foreground hover:text-primary transition">About</Link>
          <Link to="/mentors" className="text-foreground hover:text-primary transition">Mentors</Link>
          <Link to="/events" className="text-foreground hover:text-primary transition">Events</Link>
          <Link to="/resources" className="text-foreground hover:text-primary transition">Resources</Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition">Contact</Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg animate-fade-in">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link to="/about" className="px-2 py-2 text-foreground hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/mentors" className="px-2 py-2 text-foreground hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Mentors</Link>
            <Link to="/events" className="px-2 py-2 text-foreground hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link to="/resources" className="px-2 py-2 text-foreground hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link to="/contact" className="px-2 py-2 text-foreground hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
