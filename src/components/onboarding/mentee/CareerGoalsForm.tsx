
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
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MenteeOnboardingFormValues } from '../mentee-types';

interface CareerGoalsFormProps {
  form: UseFormReturn<MenteeOnboardingFormValues>;
  onSubmit: (values: Partial<MenteeOnboardingFormValues>) => void;
  onBack: () => void;
}

const CareerGoalsForm: FC<CareerGoalsFormProps> = ({ form, onSubmit, onBack }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="careerGoals"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Career Goals</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your short and long-term career goals..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Areas of Interest</FormLabel>
              <FormControl>
                <Input placeholder="Web Development, Machine Learning, UX Design" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn Profile URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://linkedin.com/in/yourname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>Back</Button>
          <Button type="submit">Next: Availability</Button>
        </div>
      </form>
    </Form>
  );
};

export default CareerGoalsForm;
