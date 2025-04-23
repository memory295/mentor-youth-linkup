
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CheckCircle, CircleSlash } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { OnboardingFormValues } from './types';

interface AvailabilityFormProps {
  form: UseFormReturn<OnboardingFormValues>;
  onSubmit: (values: OnboardingFormValues) => void;
  onBack: () => void;
}

const AvailabilityForm: FC<AvailabilityFormProps> = ({ form, onSubmit, onBack }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="linkedIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn Profile URL</FormLabel>
              <FormControl>
                <Input placeholder="https://linkedin.com/in/yourname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Profile URL</FormLabel>
              <FormControl>
                <Input placeholder="https://github.com/yourusername" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Availability</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="E.g., Weekday evenings, Saturday mornings, 2 hours per week..." 
                  className="min-h-[100px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div className="text-sm">
              <p className="font-medium">Weekly commitment</p>
              <p className="text-muted-foreground">We recommend 1-3 hours per week for effective mentorship</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
            <CircleSlash className="h-5 w-5 text-amber-500" />
            <div className="text-sm">
              <p className="font-medium">Set boundaries</p>
              <p className="text-muted-foreground">Be clear about when you're available and when you're not</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>Back</Button>
          <Button type="submit">Complete Profile</Button>
        </div>
      </form>
    </Form>
  );
};

export default AvailabilityForm;
