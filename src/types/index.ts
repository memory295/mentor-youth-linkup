
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'mentor' | 'mentee';
  profileImage?: string;
  skills: string[];
  bio?: string;
  location?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Mentor extends User {
  role: 'mentor';
  expertise: string[];
  yearsOfExperience: number;
  company?: string;
  position?: string;
  availability: {
    days: string[];
    times: string[];
    timezone: string;
  };
  mentees: string[];
  averageRating: number;
}

export interface Mentee extends User {
  role: 'mentee';
  interests: string[];
  goals: string[];
  educationLevel: string;
  currentCourse?: string;
  mentors: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  mentorId: string;
  menteeIds: string[];
  status: 'active' | 'completed' | 'archived';
  tags: string[];
  githubRepo?: string;
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assigneeId: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MentorshipSession {
  id: string;
  mentorId: string;
  menteeId: string;
  title: string;
  description?: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  meetingLink?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  online: boolean;
  meetingLink?: string;
  organizer: string;
  attendees: string[];
  maxCapacity?: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
