
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
import { Pencil, User, Briefcase, Calendar, GraduationCap, Star } from "lucide-react";

const mentorProfileSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  jobTitle: z.string().min(2, { message: "Job title is required." }),
  company: z.string().min(2, { message: "Company name is required." }),
  bio: z.string().min(10, { message: "Bio should be at least 10 characters." }),
  yearsOfExperience: z.coerce.number().min(0, { message: "Years of experience must be a positive number." }),
  skills: z.string().min(2, { message: "Please enter at least one skill." }),
  education: z.string().optional(),
  certifications: z.string().optional(),
  availability: z.string().min(2, { message: "Please specify your availability." }),
  mentorshipAreas: z.string().min(2, { message: "Please specify areas you can mentor in." }),
  preferredCommunication: z.string().min(2, { message: "Please select a preferred communication method." }),
  phone: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

type MentorProfileFormValues = z.infer<typeof mentorProfileSchema>;

const MentorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const form = useForm<MentorProfileFormValues>({
    resolver: zodResolver(mentorProfileSchema),
    defaultValues: {
      fullName: 'Jane Doe',
      email: 'jane.doe@example.com',
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      bio: 'Passionate software engineer with expertise in React, Node.js and cloud architecture. I love mentoring junior developers and helping them advance their careers in tech.',
      yearsOfExperience: 8,
      skills: 'React, Node.js, TypeScript, AWS, System Design, Leadership',
      education: 'M.S. Computer Science, University of Technology',
      certifications: 'AWS Solutions Architect, Google Cloud Professional Developer',
      availability: 'Weekday evenings (6-8pm), Saturday mornings',
      mentorshipAreas: 'Web Development, Career Guidance, Technical Interview Preparation',
      preferredCommunication: 'Video calls, Email',
      phone: '+1 (555) 987-6543',
      linkedin: 'https://linkedin.com/in/janedoe',
      github: 'https://github.com/janedoe',
    }
  });

  const onSubmit = (data: MentorProfileFormValues) => {
    // In a real app, this would send the data to an API
    console.log('Form submitted:', data);
    toast.success("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <DashboardLayout role="mentor">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your mentor profile and preferences</p>
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
            <TabsTrigger value="professional">Professional Details</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship Preferences</TabsTrigger>
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
                        <AvatarFallback className="text-lg">JD</AvatarFallback>
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
                          <FormLabel>Professional Bio</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              disabled={!isEditing}
                              placeholder="Tell mentees about your background, expertise, and mentoring approach..."
                              className="min-h-[150px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="professional" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Experience</CardTitle>
                    <CardDescription>Update your work experience and skills</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="yearsOfExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
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
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Skills (comma separated)</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
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
                          <FormLabel>Education (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="certifications"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Certifications (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      <Label>Social Profiles</Label>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="linkedin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>LinkedIn URL</FormLabel>
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
                              <FormLabel>GitHub URL</FormLabel>
                              <FormControl>
                                <Input {...field} disabled={!isEditing} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mentorship" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Preferences</CardTitle>
                    <CardDescription>Set your mentorship preferences and availability</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="mentorshipAreas"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mentorship Areas</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={!isEditing} />
                          </FormControl>
                          <FormMessage />
                          <p className="text-sm text-muted-foreground">
                            Specific areas where you can provide mentorship (comma-separated)
                          </p>
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

export default MentorProfile;
