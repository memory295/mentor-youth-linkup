
import { z } from 'zod';

export const menteeOnboardingSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  current_education: z.string().min(2, { message: 'Current education information is required.' }),
  graduation_year: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 2000 && Number(val) <= 2100, {
    message: 'Please enter a valid graduation year between 2000 and 2100.'
  }),
  interests: z.string().min(2, { message: 'Please enter at least one area of interest.' }),
  goals: z.string().min(10, { message: 'Career goals must be at least 10 characters.' }),
  preferredCommunication: z.string().optional(),
  availability: z.string().optional(),
});

export type MenteeOnboardingFormValues = z.infer<typeof menteeOnboardingSchema>;
