
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Calendar, MessageCircle } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MenteeOnboardingFormValues } from '../mentee-types';

interface AvailabilityFormProps {
  form: UseFormReturn<MenteeOnboardingFormValues>;
  onSubmit: (values: MenteeOnboardingFormValues) => void;
  onBack: () => void;
}

const AvailabilityForm: FC<AvailabilityFormProps> = ({ form, onSubmit, onBack }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="preferredCommunication"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Communication Method</FormLabel>
              <FormControl>
                <Input placeholder="Video calls, chat, email, etc." {...field} />
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
                  placeholder="E.g., Weekday evenings, Saturday mornings, 1 hour per week..." 
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
            <Calendar className="h-5 w-5 text-green-500" />
            <div className="text-sm">
              <p className="font-medium">Regular meetings</p>
              <p className="text-muted-foreground">Regular sessions with your mentor help build momentum</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md bg-muted/50">
            <MessageCircle className="h-5 w-5 text-amber-500" />
            <div className="text-sm">
              <p className="font-medium">Communication preferences</p>
              <p className="text-muted-foreground">Let mentors know how you prefer to communicate</p>
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
