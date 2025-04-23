
import { z } from 'zod';

export const onboardingSchema = z.object({
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

export type OnboardingFormValues = z.infer<typeof onboardingSchema>;
