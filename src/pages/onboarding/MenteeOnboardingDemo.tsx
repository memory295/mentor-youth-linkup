
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
      education: 'Bachelor of Science in Computer Engineering',
      currentRole: 'Junior Web Developer',
      careerGoals: 'Looking to transition into a senior developer role within the next 2 years with a focus on full-stack development. Long term goal is to become a technical lead or architect.',
      interests: 'Web Development, Cloud Architecture, Mobile Development',
      linkedIn: 'https://linkedin.com/in/johnsmith',
      preferredCommunication: 'Video calls and chat',
      availability: 'Monday and Wednesday evenings 7-9 PM EST, Sunday afternoons 2-5 PM EST'
    }
  });

  const handleBasicInfoSubmit = (values: Partial<MenteeOnboardingFormValues>) => {
    form.setValue('fullName', values.fullName || '');
    form.setValue('education', values.education || '');
    form.setValue('currentRole', values.currentRole || '');
    setCurrentStep(2);
  };

  const handleCareerGoalsSubmit = (values: Partial<MenteeOnboardingFormValues>) => {
    form.setValue('careerGoals', values.careerGoals || '');
    form.setValue('interests', values.interests || '');
    form.setValue('linkedIn', values.linkedIn || '');
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
