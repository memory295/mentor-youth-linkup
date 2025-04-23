
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-must-blue-dark text-white">
      <div className="container px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">MUST Alumni</div>
          </Link>
          <p className="mt-4 max-w-md text-must-blue-light">
            Connecting MUST alumni and youth through mentorship and collaboration to foster the next generation of tech leaders.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-must-teal transition">About Us</Link></li>
            <li><Link to="/mentors" className="hover:text-must-teal transition">Mentors</Link></li>
            <li><Link to="/events" className="hover:text-must-teal transition">Events</Link></li>
            <li><Link to="/resources" className="hover:text-must-teal transition">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-must-teal transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>MUST University, Tech Campus</li>
            <li>Email: info@mustalumni.org</li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} MUST Alumni Committee. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="hover:text-must-teal transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-must-teal transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
