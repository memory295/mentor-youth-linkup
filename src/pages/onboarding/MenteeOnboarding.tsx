
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { menteeOnboardingSchema, type MenteeOnboardingFormValues } from '@/components/onboarding/mentee-types';
import MenteeOnboardingProgress from '@/components/onboarding/mentee/MenteeOnboardingProgress';
import BasicInfoForm from '@/components/onboarding/mentee/BasicInfoForm';
import CareerGoalsForm from '@/components/onboarding/mentee/CareerGoalsForm';
import AvailabilityForm from '@/components/onboarding/mentee/AvailabilityForm';

const MenteeOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<MenteeOnboardingFormValues>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<MenteeOnboardingFormValues>({
    resolver: zodResolver(menteeOnboardingSchema),
    defaultValues: {
      fullName: '',
      current_education: '',
      graduation_year: '',
      interests: '',
      goals: '',
      preferredCommunication: '',
      availability: '',
    }
  });

  const onSubmitBasicInfo = (values: Partial<MenteeOnboardingFormValues>) => {
    setFormData({ ...formData, ...values });
    setStep(2);
  };

  const onSubmitCareerGoals = (values: Partial<MenteeOnboardingFormValues>) => {
    setFormData({ ...formData, ...values });
    setStep(3);
  };

  const onSubmitAvailability = (values: MenteeOnboardingFormValues) => {
    const finalData = { ...formData, ...values };
    
    // In a real application, this would make an API call to save the mentee profile
    console.log('Submitting mentee profile:', finalData);
    
    toast({
      title: "Profile Created!",
      description: "Your mentee profile has been successfully set up.",
    });
    
    setTimeout(() => {
      navigate('/mentee/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-must-blue-dark">Mentee Onboarding</h1>
          <p className="text-muted-foreground mt-2">Complete your profile to start your mentorship journey</p>
        </div>

        <MenteeOnboardingProgress currentStep={step} />

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Basic Information"}
              {step === 2 && "Career Goals"}
              {step === 3 && "Availability"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Tell us about yourself"}
              {step === 2 && "What are you looking to achieve?"}
              {step === 3 && "When are you available to meet with mentors?"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <BasicInfoForm form={form} onSubmit={onSubmitBasicInfo} />
            )}
            {step === 2 && (
              <CareerGoalsForm 
                form={form} 
                onSubmit={onSubmitCareerGoals}
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
              We're excited to have you start your mentorship journey!
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MenteeOnboarding;
