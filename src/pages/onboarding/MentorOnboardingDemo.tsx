import { useState } from 'react';
import { Button } from '@/components/ui/button';
import OnboardingProgress from '@/components/onboarding/OnboardingProgress';
import BasicInfoForm from '@/components/onboarding/BasicInfoForm';
import ExpertiseForm from '@/components/onboarding/ExpertiseForm';
import AvailabilityForm from '@/components/onboarding/AvailabilityForm';
import { OnboardingFormValues } from '@/components/onboarding/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onboardingSchema } from '@/components/onboarding/types';

const MentorOnboardingDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: 'Jane Doe',
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      yearsOfExperience: '7',
      skills: 'React, TypeScript, Node.js, GraphQL',
      bio: 'Passionate software engineer with 7 years of experience in building scalable web applications. Specializing in frontend technologies and mentoring junior developers.',
      linkedIn: 'https://linkedin.com/in/janedoe',
      github: 'https://github.com/janedoe',
      availability: 'Weekday evenings from 6-8 PM EST, Saturday mornings 10 AM-12 PM'
    }
  });

  const handleBasicInfoSubmit = (values: Partial<OnboardingFormValues>) => {
    form.setValue('fullName', values.fullName || '');
    form.setValue('jobTitle', values.jobTitle || '');
    form.setValue('company', values.company || '');
    setCurrentStep(2);
  };

  const handleExpertiseSubmit = (values: Partial<OnboardingFormValues>) => {
    form.setValue('yearsOfExperience', values.yearsOfExperience || '');
    form.setValue('skills', values.skills || '');
    form.setValue('bio', values.bio || '');
    setCurrentStep(3);
  };

  const handleAvailabilitySubmit = (values: Partial<OnboardingFormValues>) => {
    form.setValue('availability', values.availability || '');
    alert('Onboarding Complete! Values: ' + JSON.stringify(form.getValues(), null, 2));
  };

  return (
    <div className="container mx-auto max-w-xl py-12 px-4">
      <OnboardingProgress currentStep={currentStep} />
      
      {currentStep === 1 && (
        <BasicInfoForm 
          form={form} 
          onSubmit={handleBasicInfoSubmit} 
        />
      )}
      
      {currentStep === 2 && (
        <ExpertiseForm 
          form={form} 
          onSubmit={handleExpertiseSubmit}
          onBack={() => setCurrentStep(1)}
        />
      )}
      
      {currentStep === 3 && (
        <AvailabilityForm 
          form={form} 
          onSubmit={handleAvailabilitySubmit}
          onBack={() => setCurrentStep(2)}
        />
      )}
    </div>
  );
};

export default MentorOnboardingDemo;
