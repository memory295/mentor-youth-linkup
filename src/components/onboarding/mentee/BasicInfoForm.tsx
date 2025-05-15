
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MenteeOnboardingFormValues } from '../mentee-types';

interface BasicInfoFormProps {
  form: UseFormReturn<MenteeOnboardingFormValues>;
  onSubmit: (values: Partial<MenteeOnboardingFormValues>) => void;
}

const BasicInfoForm: FC<BasicInfoFormProps> = ({ form, onSubmit }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education</FormLabel>
              <FormControl>
                <Input placeholder="Bachelor's in Computer Science" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Role</FormLabel>
              <FormControl>
                <Input placeholder="Junior Developer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Next: Career Goals</Button>
        </div>
      </form>
    </Form>
  );
};

export default BasicInfoForm;
