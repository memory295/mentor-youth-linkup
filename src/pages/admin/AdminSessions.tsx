
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, Plus, Search, Users, Video, X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

type Session = {
  id: string;
  title: string;
  date: string;
  time: string;
  host: string;
  participants: string[];
  meetingType: 'zoom' | 'google-meet' | 'microsoft-teams' | 'in-person';
  meetingLink?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
};

const AdminSessions = () => {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      title: 'React Performance Optimization',
      date: '2025-05-20',
      time: '15:00',
      host: 'Jane Doe',
      participants: ['John Smith', 'Alice Johnson'],
      meetingType: 'zoom',
      meetingLink: 'https://zoom.us/j/1234567890',
      status: 'scheduled',
    },
    {
      id: '2',
      title: 'Career Development Workshop',
      date: '2025-05-22',
      time: '13:00',
      host: 'Michael Chen',
      participants: ['Sarah Williams', 'Robert Brown', 'Emma Davis'],
      meetingType: 'google-meet',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      status: 'scheduled',
    },
    {
      id: '3',
      title: 'Introduction to Backend Development',
      date: '2025-05-18',
      time: '10:00',
      host: 'David Wilson',
      participants: ['Thomas Moore', 'Linda Garcia'],
      meetingType: 'in-person',
      status: 'completed',
    }
  ]);

  const [isAddSessionOpen, setIsAddSessionOpen] = useState(false);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const form = useForm({
    defaultValues: {
      title: '',
      date: '',
      time: '',
      host: '',
      meetingType: 'zoom',
      meetingLink: '',
      description: ''
    }
  });

  const inviteForm = useForm({
    defaultValues: {
      participants: ''
    }
  });

  const handleAddSession = (data: any) => {
    const newSession: Session = {
      id: (sessions.length + 1).toString(),
      title: data.title,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
      time: data.time,
      host: data.host,
      participants: [],
      meetingType: data.meetingType,
      meetingLink: data.meetingLink,
      status: 'scheduled'
    };

    setSessions([...sessions, newSession]);
    setIsAddSessionOpen(false);
    form.reset();
    setSelectedDate(null);
    toast({
      title: "Session created",
      description: "The session has been successfully created."
    });
  };

  const handleSendInvites = (data: any) => {
    if (!selectedSessionId) return;
    
    const participants = data.participants.split(',').map((p: string) => p.trim());
    
    setSessions(sessions.map(session => 
      session.id === selectedSessionId 
        ? { ...session, participants: [...session.participants, ...participants] } 
        : session
    ));
    
    setIsInviteDialogOpen(false);
    inviteForm.reset();
    toast({
      title: "Invitations sent",
      description: `Invitations have been sent to ${participants.length} participants.`
    });
  };

  const openInviteDialog = (sessionId: string) => {
    setSelectedSessionId(sessionId);
    setIsInviteDialogOpen(true);
  };

  const filteredSessions = sessions.filter(session => {
    return session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           session.host.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getMeetingTypeIcon = (type: string) => {
    switch (type) {
      case 'zoom':
        return <Video className="h-4 w-4 text-blue-500" />;
      case 'google-meet':
        return <Video className="h-4 w-4 text-green-500" />;
      case 'microsoft-teams':
        return <Video className="h-4 w-4 text-purple-500" />;
      case 'in-person':
        return <Users className="h-4 w-4 text-amber-500" />;
      default:
        return <Video className="h-4 w-4" />;
    }
  };

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Sessions Management</h1>
            <p className="text-muted-foreground">Create and manage mentorship sessions</p>
          </div>
          <Button onClick={() => setIsAddSessionOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Session
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search sessions by title or host..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="zoom">Zoom</SelectItem>
                <SelectItem value="google-meet">Google Meet</SelectItem>
                <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
                <SelectItem value="in-person">In-person</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredSessions.map((session) => (
            <Card key={session.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{session.title}</h3>
                      <Badge className={getStatusBadgeStyles(session.status)}>
                        {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {session.date} at {session.time}
                      </div>
                      <div className="flex items-center gap-1">
                        {getMeetingTypeIcon(session.meetingType)}
                        {session.meetingType.charAt(0).toUpperCase() + session.meetingType.slice(1).replace('-', ' ')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        Host: {session.host}
                      </div>
                    </div>
                    {session.meetingLink && (
                      <div className="flex items-center text-sm">
                        <span className="font-medium mr-2">Meeting Link:</span>
                        <a 
                          href={session.meetingLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline overflow-hidden text-ellipsis"
                        >
                          {session.meetingLink}
                        </a>
                      </div>
                    )}
                    <div className="mt-3">
                      <div className="text-sm font-medium mb-1">Participants ({session.participants.length}):</div>
                      <div className="flex flex-wrap gap-2">
                        {session.participants.map((participant, index) => (
                          <Badge key={index} variant="outline" className="flex items-center gap-1">
                            {participant}
                          </Badge>
                        ))}
                        {session.participants.length === 0 && (
                          <span className="text-sm text-muted-foreground">No participants yet</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 mt-4 md:mt-0">
                    <Button 
                      variant="outline" 
                      onClick={() => openInviteDialog(session.id)}
                    >
                      <Users className="mr-2 h-4 w-4" /> Invite Users
                    </Button>
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" /> Edit Session
                    </Button>
                    {session.status === 'scheduled' && (
                      <Button variant="destructive">
                        <X className="mr-2 h-4 w-4" /> Cancel Session
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredSessions.length === 0 && (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center h-40">
                <p className="text-muted-foreground mb-4">No sessions found</p>
                <Button onClick={() => setIsAddSessionOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add Session
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Add Session Dialog */}
      <Dialog open={isAddSessionOpen} onOpenChange={setIsAddSessionOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Session</DialogTitle>
            <DialogDescription>
              Enter the session details and add meeting information.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddSession)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Session Title</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., Web Development Workshop" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={`w-full text-left font-normal justify-start ${!selectedDate && "text-muted-foreground"}`}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="host"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Host</FormLabel>
                    <FormControl>
                      <Input placeholder="Host name" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Session Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter session details and agenda..." 
                        className="min-h-[80px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="meetingType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meeting Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a meeting type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="zoom">Zoom</SelectItem>
                          <SelectItem value="google-meet">Google Meet</SelectItem>
                          <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
                          <SelectItem value="in-person">In-Person</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch("meetingType") !== "in-person" && (
                  <FormField
                    control={form.control}
                    name="meetingLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meeting Link</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={`Enter ${form.watch("meetingType")} meeting link`} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddSessionOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Session</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Invite Users Dialog */}
      <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Invite Users to Session</DialogTitle>
            <DialogDescription>
              Enter user names or email addresses separated by commas.
            </DialogDescription>
          </DialogHeader>
          <Form {...inviteForm}>
            <form onSubmit={inviteForm.handleSubmit(handleSendInvites)} className="space-y-4">
              <FormField
                control={inviteForm.control}
                name="participants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Participants</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="E.g., John Smith, jane@example.com" 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsInviteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Send Invites</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AdminSessions;
