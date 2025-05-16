
import { z } from 'zod';

export const menteeOnboardingSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  current_education: z.string().min(2, { message: 'Current education information is required.' }),
  graduation_year: z.coerce.number().min(2000, { message: 'Please enter a valid graduation year from 2000 onwards.' }).max(2100, { message: 'Please enter a valid graduation year before 2100.' }),
  interests: z.string().min(2, { message: 'Please enter at least one area of interest.' }),
  goals: z.string().min(10, { message: 'Career goals must be at least 10 characters.' }),
  preferredCommunication: z.string().optional(),
  availability: z.string().optional(),
});

export type MenteeOnboardingFormValues = z.infer<typeof menteeOnboardingSchema>;
