
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import MenteeOnboardingProgress from '@/components/onboarding/mentee/MenteeOnboardingProgress';
import BasicInfoForm from '@/components/onboarding/mentee/BasicInfoForm';
import CareerGoalsForm from '@/components/onboarding/mentee/CareerGoalsForm';
import AvailabilityForm from '@/components/onboarding/mentee/AvailabilityForm';
import { MenteeOnboardingFormValues } from '@/components/onboarding/mentee-types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { menteeOnboardingSchema } from '@/components/onboarding/mentee-types';

const MenteeOnboardingDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const form = useForm<MenteeOnboardingFormValues>({
    resolver: zodResolver(menteeOnboardingSchema),
    defaultValues: {
      fullName: 'John Smith',
      current_education: 'Bachelor of Science in Computer Engineering',
      graduation_year: '2025',
      goals: 'Looking to transition into a senior developer role within the next 2 years with a focus on full-stack development. Long term goal is to become a technical lead or architect.',
      interests: 'Web Development, Cloud Architecture, Mobile Development',
      preferredCommunication: 'Video calls and chat',
      availability: 'Weekdays after 6pm, weekends flexible',
    }
  });

  const handleBasicInfoSubmit = (values: Partial<MenteeOnboardingFormValues>) => {
    form.setValue('fullName', values.fullName || '');
    form.setValue('current_education', values.current_education || '');
    form.setValue('graduation_year', values.graduation_year || '');
    setCurrentStep(2);
  };

  const handleCareerGoalsSubmit = (values: Partial<MenteeOnboardingFormValues>) => {
    form.setValue('goals', values.goals || '');
    form.setValue('interests', values.interests || '');
    setCurrentStep(3);
  };

  const handleAvailabilitySubmit = (values: Partial<MenteeOnboardingFormValues>) => {
    form.setValue('preferredCommunication', values.preferredCommunication || '');
    form.setValue('availability', values.availability || '');
    alert('Onboarding Complete! Values: ' + JSON.stringify(form.getValues(), null, 2));
  };

  return (
    <div className="container mx-auto max-w-xl py-12 px-4">
      <MenteeOnboardingProgress currentStep={currentStep} />
      
      {currentStep === 1 && (
        <BasicInfoForm 
          form={form} 
          onSubmit={handleBasicInfoSubmit} 
        />
      )}
      
      {currentStep === 2 && (
        <CareerGoalsForm 
          form={form} 
          onSubmit={handleCareerGoalsSubmit}
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

export default MenteeOnboardingDemo;
