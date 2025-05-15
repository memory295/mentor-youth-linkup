
import { z } from 'zod';

export const menteeOnboardingSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  education: z.string().min(2, { message: 'Education information is required.' }),
  currentRole: z.string().min(2, { message: 'Current role is required.' }),
  careerGoals: z.string().min(10, { message: 'Career goals must be at least 10 characters.' }),
  interests: z.string().min(2, { message: 'Please enter at least one area of interest.' }),
  linkedIn: z.string().url({ message: 'Please enter a valid LinkedIn URL.' }).optional().or(z.literal('')),
  preferredCommunication: z.string().min(2, { message: 'Please specify your preferred communication method.' }),
  availability: z.string().min(2, { message: 'Please specify your availability.' }),
});

export type MenteeOnboardingFormValues = z.infer<typeof menteeOnboardingSchema>;
