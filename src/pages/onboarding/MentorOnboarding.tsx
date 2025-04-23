
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, CircleSlash } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const onboardingSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  jobTitle: z.string().min(2, { message: 'Job title is required.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  yearsOfExperience: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: 'Please enter a valid number of years.'
  }),
  skills: z.string().min(2, { message: 'Please enter at least one skill.' }),
  bio: z.string().min(10, { message: 'Bio must be at least 10 characters.' }),
  linkedIn: z.string().url({ message: 'Please enter a valid LinkedIn URL.' }).optional().or(z.literal('')),
  github: z.string().url({ message: 'Please enter a valid GitHub URL.' }).optional().or(z.literal('')),
  availability: z.string().min(2, { message: 'Please specify your availability.' }),
});

type OnboardingFormValues = z.infer<typeof onboardingSchema>;

const MentorOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<OnboardingFormValues>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: '',
      jobTitle: '',
      company: '',
      yearsOfExperience: '',
      skills: '',
      bio: '',
      linkedIn: '',
      github: '',
      availability: '',
    }
  });

  const onSubmitBasicInfo = (values: Partial<OnboardingFormValues>) => {
    setFormData({ ...formData, ...values });
    setStep(2);
  };

  const onSubmitExpertise = (values: Partial<OnboardingFormValues>) => {
    setFormData({ ...formData, ...values });
    setStep(3);
  };

  const onSubmitAvailability = (values: OnboardingFormValues) => {
    const finalData = { ...formData, ...values };
    
    // In a real application, this would make an API call to save the mentor profile
    console.log('Submitting mentor profile:', finalData);
    
    toast({
      title: "Profile Created!",
      description: "Your mentor profile has been successfully set up.",
    });
    
    // Redirect to mentor dashboard after successful onboarding
    setTimeout(() => {
      navigate('/mentor/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-must-blue-dark">Mentor Onboarding</h1>
          <p className="text-muted-foreground mt-2">Complete your profile to start mentoring</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center w-full max-w-md">
            <div className={`w-1/3 flex flex-col items-center ${step >= 1 ? 'text-must-blue' : 'text-muted-foreground'}`}>
              <div className={`rounded-full flex items-center justify-center w-10 h-10 mb-1 ${step >= 1 ? 'bg-must-blue text-white' : 'bg-muted text-muted-foreground'}`}>1</div>
              <span className="text-xs font-medium">Basic Info</span>
            </div>
            <div className={`w-1/3 flex flex-col items-center ${step >= 2 ? 'text-must-blue' : 'text-muted-foreground'}`}>
              <div className={`rounded-full flex items-center justify-center w-10 h-10 mb-1 ${step >= 2 ? 'bg-must-blue text-white' : 'bg-muted text-muted-foreground'}`}>2</div>
              <span className="text-xs font-medium">Expertise</span>
            </div>
            <div className={`w-1/3 flex flex-col items-center ${step >= 3 ? 'text-must-blue' : 'text-muted-foreground'}`}>
              <div className={`rounded-full flex items-center justify-center w-10 h-10 mb-1 ${step >= 3 ? 'bg-must-blue text-white' : 'bg-muted text-muted-foreground'}`}>3</div>
              <span className="text-xs font-medium">Availability</span>
            </div>
          </div>
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Basic Information"}
              {step === 2 && "Your Expertise"}
              {step === 3 && "Availability"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Tell us about yourself"}
              {step === 2 && "What skills and experience can you share?"}
              {step === 3 && "When are you available to mentor?"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitBasicInfo)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Senior Software Engineer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Tech Company Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button type="submit">Next: Expertise</Button>
                  </div>
                </form>
              </Form>
            )}

            {step === 2 && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitExpertise)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="yearsOfExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" placeholder="5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills (comma separated)</FormLabel>
                        <FormControl>
                          <Input placeholder="React, JavaScript, Node.js" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Bio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your background, experience, and what you're passionate about..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
                    <Button type="submit">Next: Availability</Button>
                  </div>
                </form>
              </Form>
            )}

            {step === 3 && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitAvailability)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="linkedIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/yourname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub Profile URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/yourusername" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Availability</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="E.g., Weekday evenings, Saturday mornings, 2 hours per week..." 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div className="text-sm">
                        <p className="font-medium">Weekly commitment</p>
                        <p className="text-muted-foreground">We recommend 1-3 hours per week for effective mentorship</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
                      <CircleSlash className="h-5 w-5 text-amber-500" />
                      <div className="text-sm">
                        <p className="font-medium">Set boundaries</p>
                        <p className="text-muted-foreground">Be clear about when you're available and when you're not</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(2)}>Back</Button>
                    <Button type="submit">Complete Profile</Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center border-t p-4">
            <p className="text-xs text-center text-muted-foreground max-w-md">
              By completing your profile, you agree to our Terms of Service and Privacy Policy. 
              We're excited to have you join our mentorship community!
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MentorOnboarding;
