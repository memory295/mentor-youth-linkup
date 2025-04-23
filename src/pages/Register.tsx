
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Register = () => {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get('role') || 'mentee';
  const [role, setRole] = useState(defaultRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration API call
    setTimeout(() => {
      // Redirect to onboarding based on role
      if (role === 'mentor') {
        navigate('/onboarding/mentor');
      } else {
        navigate('/onboarding/mentee');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4 bg-muted/30">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
              <CardDescription className="text-center">
                Join the MUST Alumni Committee platform to connect, learn, and grow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={role} onValueChange={setRole} className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mentee">I'm a Mentee</TabsTrigger>
                  <TabsTrigger value="mentor">I'm a Mentor</TabsTrigger>
                </TabsList>
                <TabsContent value="mentee">
                  <p className="text-sm text-muted-foreground mt-2">
                    Sign up as a mentee to connect with experienced professionals and accelerate your tech career.
                  </p>
                </TabsContent>
                <TabsContent value="mentor">
                  <p className="text-sm text-muted-foreground mt-2">
                    Sign up as a mentor to share your knowledge and guide the next generation of tech talent.
                  </p>
                </TabsContent>
              </Tabs>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? 
                        <EyeOff className="h-4 w-4 text-muted-foreground" /> : 
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      }
                    </button>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  By clicking continue, you agree to our{' '}
                  <Link to="/terms" className="text-must-blue hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-must-blue hover:underline">
                    Privacy Policy
                  </Link>.
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Button variant="outline" disabled={isLoading}>
                    Google
                  </Button>
                  <Button variant="outline" disabled={isLoading}>
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="text-center text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-must-blue hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
