
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { onboardingSchema, type OnboardingFormValues } from '@/components/onboarding/types';
import OnboardingProgress from '@/components/onboarding/OnboardingProgress';
import BasicInfoForm from '@/components/onboarding/BasicInfoForm';
import ExpertiseForm from '@/components/onboarding/ExpertiseForm';
import AvailabilityForm from '@/components/onboarding/AvailabilityForm';

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

        <OnboardingProgress currentStep={step} />

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
              <BasicInfoForm form={form} onSubmit={onSubmitBasicInfo} />
            )}
            {step === 2 && (
              <ExpertiseForm 
                form={form} 
                onSubmit={onSubmitExpertise}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <AvailabilityForm 
                form={form} 
                onSubmit={onSubmitAvailability}
                onBack={() => setStep(2)}
              />
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
