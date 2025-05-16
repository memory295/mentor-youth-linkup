
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  UserPlus,
  Link as LinkIcon,
  MessageSquare,
  Calendar,
  Plus,
  Check
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

// Types for our project data (same as in MentorProjects.tsx)
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

// Props for the component
interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
}

// Status badge component for tasks
const TaskStatusBadge = ({ status }: { status: ProjectTask['status'] }) => {
  const variants = {
    'todo': "bg-gray-100 text-gray-800",
    'in-progress': "bg-yellow-100 text-yellow-800",
    'completed': "bg-green-100 text-green-800"
  };
  
  const labels = {
    'todo': "To Do",
    'in-progress': "In Progress",
    'completed': "Completed"
  };
  
  return (
    <Badge className={variants[status]} variant="outline">
      {labels[status]}
    </Badge>
  );
};

const ProjectDetailView = ({ project, onClose }: ProjectDetailViewProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get participant by ID
  const getParticipantById = (id: string) => {
    return project.participants.find(p => p.id === id) || { name: 'Unassigned', avatar: '?' };
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
          <CardDescription className="mt-1">
            Created on {new Date(project.createdAt).toLocaleDateString()}
            {" • "}
            <Badge variant="outline" className="ml-1">
              {project.visibility === 'public' ? 'Public' : 'Private'}
            </Badge>
          </CardDescription>
        </div>
        <Button variant="outline" onClick={onClose}>Close</Button>
      </CardHeader>
      
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <CardContent className="pt-0 pb-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="participants">Participants</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
        </CardContent>
        
        <CardContent className="pt-0">
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-base">About this project</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-base">Task Progress</CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Tasks completed</span>
                        <span className="font-medium">
                          {project.tasks.filter(t => t.status === 'completed').length} / {project.tasks.length}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ 
                            width: `${project.tasks.length ? 
                              (project.tasks.filter(t => t.status === 'completed').length / project.tasks.length) * 100 : 0}%` 
                          }} 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Status Summary</h4>
                      <div className="flex gap-3">
                        <div className="border rounded p-2 flex-1 text-center">
                          <div className="text-xl font-bold">
                            {project.tasks.filter(t => t.status === 'todo').length}
                          </div>
                          <div className="text-xs text-muted-foreground">To Do</div>
                        </div>
                        <div className="border rounded p-2 flex-1 text-center">
                          <div className="text-xl font-bold">
                            {project.tasks.filter(t => t.status === 'in-progress').length}
                          </div>
                          <div className="text-xs text-muted-foreground">In Progress</div>
                        </div>
                        <div className="border rounded p-2 flex-1 text-center">
                          <div className="text-xl font-bold">
                            {project.tasks.filter(t => t.status === 'completed').length}
                          </div>
                          <div className="text-xs text-muted-foreground">Completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-base">Team Members</CardTitle>
                </CardHeader>
                <CardContent className="py-3">
                  <div className="space-y-3">
                    {project.participants.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No participants yet.</p>
                    ) : (
                      project.participants.slice(0, 5).map(participant => (
                        <div key={participant.id} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-sm">
                            {participant.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{participant.name}</p>
                            <p className="text-xs text-muted-foreground">{participant.role}</p>
                          </div>
                        </div>
                      ))
                    )}
                    
                    {project.participants.length > 5 && (
                      <Button variant="link" size="sm" className="px-0">
                        View all {project.participants.length} members
                      </Button>
                    )}
                    
                    <Button size="sm" className="w-full mt-2">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Add Participant
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm">
                <LinkIcon className="h-4 w-4 mr-1" />
                Add Resources
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-1" />
                Discussion
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-1" />
                Schedule Demo
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="tasks" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Project Tasks</h3>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                New Task
              </Button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {project.tasks.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      No tasks created yet. Click "New Task" to add one.
                    </TableCell>
                  </TableRow>
                ) : (
                  project.tasks.map(task => {
                    const assignee = getParticipantById(task.assignee);
                    return (
                      <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                              {assignee.avatar}
                            </div>
                            <span>{assignee.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <TaskStatusBadge status={task.status} />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            {task.status !== 'completed' && (
                              <Button variant="ghost" size="sm">
                                <Check className="h-4 w-4 mr-1" />
                                Mark Done
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="participants" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Project Participants</h3>
              <Button size="sm">
                <UserPlus className="h-4 w-4 mr-1" />
                Add Participant
              </Button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {project.participants.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                      No participants added yet. Click "Add Participant" to invite someone.
                    </TableCell>
                  </TableRow>
                ) : (
                  project.participants.map(participant => {
                    const assignedTasks = project.tasks.filter(task => task.assignee === participant.id);
                    const completedTasks = assignedTasks.filter(task => task.status === 'completed');
                    
                    return (
                      <TableRow key={participant.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                              {participant.avatar}
                            </div>
                            <span className="font-medium">{participant.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{participant.role}</TableCell>
                        <TableCell>
                          {assignedTasks.length > 0 ? (
                            <div className="flex flex-col">
                              <span className="font-medium">{completedTasks.length}/{assignedTasks.length} completed</span>
                              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden mt-1">
                                <div 
                                  className="h-full bg-primary" 
                                  style={{ 
                                    width: `${assignedTasks.length ? 
                                      (completedTasks.length / assignedTasks.length) * 100 : 0}%` 
                                  }} 
                                />
                              </div>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">No tasks assigned</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Edit Role</Button>
                            <Button variant="ghost" size="sm">Assign Task</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Project Resources</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  Add Link
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Upload Resource
                </Button>
              </div>
            </div>
            
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <div className="p-3 mb-4 rounded-full bg-muted">
                <LinkIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">No resources yet</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Add links to relevant resources or upload files for the project.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  Add Link
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Upload Resource
                </Button>
              </div>
            </Card>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default ProjectDetailView;
