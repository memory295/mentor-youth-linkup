
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Pencil, User, Book, Calendar, GraduationCap, Star } from "lucide-react";

const profileSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  bio: z.string().optional(),
  current_education: z.string().min(2, { message: "Current education information is required." }),
  graduation_year: z.coerce.number()
    .min(2000, { message: "Please enter a valid graduation year from 2000 onwards." })
    .max(2100, { message: "Please enter a valid graduation year before 2100." }),
  interests: z.string().min(2, { message: "Please enter at least one area of interest." }),
  goals: z.string().min(10, { message: "Career goals must be at least 10 characters." }),
  preferredCommunication: z.string().min(2, { message: "Please select a preferred communication method." }),
  availability: z.string().min(2, { message: "Please specify your availability." }),
  phone: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const MenteeProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: 'John Smith',
      email: 'johnsmith@example.com',
      bio: 'Computer science student passionate about web development and AI.',
      current_education: 'Bachelor of Science in Computer Engineering',
      graduation_year: 2025,
      interests: 'Web Development, Cloud Architecture, Mobile Development',
      goals: 'Looking to transition into a senior developer role within the next 2 years with a focus on full-stack development. Long term goal is to become a technical lead or architect.',
      preferredCommunication: 'Video calls and chat',
      availability: 'Weekdays after 6pm, weekends flexible',
      phone: '+1 (555) 123-4567',
      linkedin: 'https://linkedin.com/in/johnsmith',
      github: 'https://github.com/johnsmith',
    }
  });

  const onSubmit = (data: ProfileFormValues) => {
    // In a real app, this would send the data to an API
    console.log('Form submitted:', data);
    toast.success("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <DashboardLayout role="mentee">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your profile information and preferences</p>
          </div>
          <Button 
            variant={isEditing ? "outline" : "default"} 
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel Editing" : (
              <>
                <Pencil className="w-4 h-4 mr-2" /> Edit Profile
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="personal">
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="education">Education & Goals</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and bio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="text-lg">JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline" disabled={!isEditing} className="mb-2">
                          <User className="w-4 h-4 mr-2" /> Change Photo
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          Upload a new profile photo (JPG or PNG, max 2MB)
                        </p>
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              disabled={!isEditing}
                              placeholder="Tell us a bit about yourself..."
                              className="min-h-[120px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Education & Career Goals</CardTitle>
                    <CardDescription>Update your education information and career goals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="current_education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Education</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="graduation_year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Graduation Year</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="number" 
                              disabled={!isEditing} 
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
                          <FormLabel>Areas of Interest (comma separated)</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Career Goals</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              disabled={!isEditing}
                              placeholder="Describe your short-term and long-term career goals..."
                              className="min-h-[120px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="communication" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Communication Preferences</CardTitle>
                    <CardDescription>Set your preferred communication methods and availability</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="preferredCommunication"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Communication Method</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
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
                              {...field} 
                              disabled={!isEditing}
                              placeholder="When are you available for mentoring sessions?"
                              className="min-h-[100px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
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
                          <FormLabel>GitHub Profile (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              {isEditing && (
                <div className="flex justify-end mt-6">
                  <Button type="submit">Save Changes</Button>
                </div>
              )}
            </form>
          </Form>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MenteeProfile;
