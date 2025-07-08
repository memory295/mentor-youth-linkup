
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  UserPlus, 
  Link as LinkIcon, 
  MessageSquare, 
  Eye,
  Video,
  Award,
  Check,
  Book
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Types for our project data
interface ProjectParticipant {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface ProjectTask {
  id: string;
  title: string;
  assignee: string;
  status: 'todo' | 'in-progress' | 'completed';
  dueDate: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
  techStack: string[];
  participants: ProjectParticipant[];
  tasks: ProjectTask[];
  createdAt: string;
  visibility: 'public' | 'private';
}

// Sample data
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Build a FarmTech App',
    description: 'Creating a mobile application to help smallholder farmers track crop health and get advice.',
    status: 'active',
    techStack: ['React Native', 'Node.js', 'MongoDB'],
    participants: [
      { id: '1', name: 'Alex Smith', role: 'Frontend Developer', avatar: 'AS' },
      { id: '2', name: 'Maria Garcia', role: 'UI Designer', avatar: 'MG' },
      { id: '3', name: 'James Wilson', role: 'Backend Developer', avatar: 'JW' },
    ],
    tasks: [
      { id: '1', title: 'Design wireframes', assignee: '2', status: 'completed', dueDate: '2025-05-10' },
      { id: '2', title: 'Build login page', assignee: '1', status: 'in-progress', dueDate: '2025-05-30' },
      { id: '3', title: 'Set up database schema', assignee: '3', status: 'todo', dueDate: '2025-06-05' },
    ],
    createdAt: '2025-05-01',
    visibility: 'private'
  },
  {
    id: '2',
    title: 'AI for Climate Monitoring',
    description: 'Developing an AI system to analyze satellite imagery and detect environmental changes.',
    status: 'active',
    techStack: ['Python', 'TensorFlow', 'AWS'],
    participants: [
      { id: '4', name: 'Sarah Johnson', role: 'Data Scientist', avatar: 'SJ' },
      { id: '5', name: 'David Brown', role: 'ML Engineer', avatar: 'DB' },
    ],
    tasks: [
      { id: '4', title: 'Collect training data', assignee: '4', status: 'completed', dueDate: '2025-05-15' },
      { id: '5', title: 'Build initial model', assignee: '5', status: 'in-progress', dueDate: '2025-06-10' },
    ],
    createdAt: '2025-05-05',
    visibility: 'public'
  },
  {
    id: '3',
    title: 'Community Health Tracker',
    description: 'A web platform for communities to track and improve local health initiatives.',
    status: 'completed',
    techStack: ['React', 'Express', 'PostgreSQL'],
    participants: [
      { id: '1', name: 'Alex Smith', role: 'Frontend Developer', avatar: 'AS' },
      { id: '6', name: 'Lisa Chen', role: 'Project Manager', avatar: 'LC' },
    ],
    tasks: [
      { id: '6', title: 'User research', assignee: '6', status: 'completed', dueDate: '2025-04-20' },
      { id: '7', title: 'Dashboard implementation', assignee: '1', status: 'completed', dueDate: '2025-05-01' },
    ],
    createdAt: '2025-04-01',
    visibility: 'public'
  }
];

// Status badge component
const ProjectStatusBadge = ({ status }: { status: Project['status'] }) => {
  const variants = {
    active: "bg-green-100 text-green-800 hover:bg-green-200",
    completed: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    archived: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };
  
  return (
    <Badge className={variants[status]} variant="outline">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

// Main component
const MentorProjects = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === "all") return true;
    if (activeTab === "active") return project.status === "active";
    if (activeTab === "completed") return project.status === "completed";
    if (activeTab === "archived") return project.status === "archived";
    return true;
  });

  // Handler for creating a new project
  const handleCreateProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const newProject: Project = {
      id: (projects.length + 1).toString(),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: 'active',
      techStack: (formData.get('techStack') as string).split(',').map(tech => tech.trim()),
      participants: [],
      tasks: [],
      createdAt: new Date().toISOString().split('T')[0],
      visibility: formData.get('visibility') as 'public' | 'private'
    };
    
    setProjects([...projects, newProject]);
    setIsNewProjectDialogOpen(false);
  };

  return (
    <DashboardLayout role="mentor">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-muted-foreground">Manage collaborative projects with your mentees</p>
          </div>
          <Dialog open={isNewProjectDialogOpen} onOpenChange={setIsNewProjectDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-1 h-4 w-4" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <form onSubmit={handleCreateProject}>
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Set up a new collaborative project for your mentees.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input id="title" name="title" placeholder="e.g. Build a FarmTech App" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" name="description" placeholder="Brief description of the project" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="techStack">Tech Stack</Label>
                    <Input id="techStack" name="techStack" placeholder="e.g. React, Node.js, MongoDB (comma separated)" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="visibility">Visibility</Label>
                    <select 
                      id="visibility" 
                      name="visibility"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      defaultValue="private"
                    >
                      <option value="private">Private (Invite only)</option>
                      <option value="public">Public (Open to all)</option>
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsNewProjectDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Project</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full md:w-auto grid-cols-4 md:inline-flex">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-4">
            <div className="grid gap-6">
              {filteredProjects.length === 0 ? (
                <Card className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="p-3 mb-4 rounded-full bg-muted">
                    <Book className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">No projects found</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">
                    {activeTab === "all" 
                      ? "You haven't created any projects yet." 
                      : `You don't have any ${activeTab} projects.`}
                  </p>
                  <Button onClick={() => setIsNewProjectDialogOpen(true)}>
                    <Plus className="mr-1 h-4 w-4" />
                    Create Project
                  </Button>
                </Card>
              ) : (
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="px-6 py-4">
                      <CardTitle>Project List</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Project</TableHead>
                            <TableHead className="hidden md:table-cell">Tech Stack</TableHead>
                            <TableHead className="hidden md:table-cell">Participants</TableHead>
                            <TableHead className="hidden md:table-cell">Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredProjects.map(project => (
                            <TableRow key={project.id}>
                              <TableCell className="font-medium">
                                <div>
                                  {project.title}
                                  <p className="text-sm text-muted-foreground hidden md:block">{project.description}</p>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex flex-wrap gap-1">
                                  {project.techStack.map((tech, index) => (
                                    <Badge key={index} variant="outline">{tech}</Badge>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex -space-x-2">
                                  {project.participants.slice(0, 3).map(participant => (
                                    <div key={participant.id} className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border-2 border-background" title={participant.name}>
                                      {participant.avatar}
                                    </div>
                                  ))}
                                  {project.participants.length > 3 && (
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted border-2 border-background">
                                      +{project.participants.length - 3}
                                    </div>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <ProjectStatusBadge status={project.status} />
                              </TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                      <Eye className="mr-2 h-4 w-4" />
                                      View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Edit className="mr-2 h-4 w-4" />
                                      Edit Project
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <UserPlus className="mr-2 h-4 w-4" />
                                      Manage Participants
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <LinkIcon className="mr-2 h-4 w-4" />
                                      Link Resources
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <MessageSquare className="mr-2 h-4 w-4" />
                                      Discussion Board
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Video className="mr-2 h-4 w-4" />
                                      Schedule Demo
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    {project.status === 'active' ? (
                                      <DropdownMenuItem>
                                        <Check className="mr-2 h-4 w-4" />
                                        Mark Completed
                                      </DropdownMenuItem>
                                    ) : project.status === 'completed' ? (
                                      <DropdownMenuItem>
                                        <Award className="mr-2 h-4 w-4" />
                                        Issue Certificates
                                      </DropdownMenuItem>
                                    ) : null}
                                    <DropdownMenuItem className="text-destructive">
                                      <Trash2 className="mr-2 h-4 w-4" />
                                      Delete Project
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MentorProjects;
