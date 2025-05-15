
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, UserPlus, UserCheck, UserX, Filter, Search, 
  MoreHorizontal, Mail, ShieldAlert, Shield 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";

// User type definition
type UserStatus = 'active' | 'pending' | 'suspended';
type UserRole = 'admin' | 'mentor' | 'mentee';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  dateJoined: string;
}

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  
  // Mock user data
  const [users, setUsers] = useState<UserData[]>([
    { id: 1, name: "Jane Doe", email: "jane.doe@example.com", role: "mentor", status: "active", dateJoined: "2023-04-12" },
    { id: 2, name: "John Smith", email: "john.smith@example.com", role: "mentee", status: "active", dateJoined: "2023-05-20" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "mentee", status: "pending", dateJoined: "2023-06-15" },
    { id: 4, name: "Robert Wilson", email: "robert.wilson@example.com", role: "mentor", status: "pending", dateJoined: "2023-07-03" },
    { id: 5, name: "Emily Davis", email: "emily.davis@example.com", role: "admin", status: "active", dateJoined: "2023-03-10" },
    { id: 6, name: "Michael Brown", email: "michael.brown@example.com", role: "mentee", status: "suspended", dateJoined: "2023-05-30" }
  ]);

  const [pendingUsers, setPendingUsers] = useState<UserData[]>([
    { id: 101, name: "Sarah Miller", email: "sarah.miller@example.com", role: "mentor", status: "pending", dateJoined: "2023-08-05" },
    { id: 102, name: "David Garcia", email: "david.garcia@example.com", role: "mentee", status: "pending", dateJoined: "2023-08-12" },
    { id: 103, name: "Jennifer Lee", email: "jennifer.lee@example.com", role: "mentor", status: "pending", dateJoined: "2023-08-15" }
  ]);

  // Handler to approve a pending user
  const handleApproveUser = (userId: number) => {
    const userToApprove = pendingUsers.find(user => user.id === userId);
    if (!userToApprove) return;

    // Remove from pending and add to users
    setPendingUsers(prev => prev.filter(user => user.id !== userId));
    
    const updatedUser = { ...userToApprove, status: 'active' as const };
    setUsers(prev => [...prev, updatedUser]);
    
    toast({
      title: "User approved",
      description: `${userToApprove.name} has been approved.`,
    });
  };

  // Handler to reject a pending user
  const handleRejectUser = (userId: number) => {
    const userToReject = pendingUsers.find(user => user.id === userId);
    if (!userToReject) return;

    // Just remove from pending
    setPendingUsers(prev => prev.filter(user => user.id !== userId));
    
    toast({
      title: "User rejected",
      description: `${userToReject.name}'s application has been rejected.`,
      variant: "destructive"
    });
  };

  // Handler to change user status (activate/suspend)
  const handleChangeUserStatus = (userId: number, newStatus: UserStatus) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    toast({
      title: `User ${newStatus === 'active' ? 'activated' : 'suspended'}`,
      description: `${user.name} has been ${newStatus === 'active' ? 'activated' : 'suspended'}.`,
      variant: newStatus === 'active' ? "default" : "destructive"
    });
  };

  // Handler to change user role
  const handleChangeUserRole = (userId: number, newRole: UserRole) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
    
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    toast({
      title: "Role updated",
      description: `${user.name}'s role has been changed to ${newRole}.`,
    });
  };

  // Filter and search users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Users</h1>
            <p className="text-muted-foreground">Manage system users and their roles</p>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        {/* Pending Users Section */}
        {pendingUsers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldAlert className="h-5 w-5 mr-2 text-amber-500" />
                Pending Approval
              </CardTitle>
              <CardDescription>Users waiting for account approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={user.role === 'admin' ? 'default' : 
                            user.role === 'mentor' ? 'secondary' : 'outline'}>
                            {user.role}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Applied: {new Date(user.dateJoined).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleApproveUser(user.id)}>
                        <UserCheck className="h-4 w-4 mr-1 text-green-500" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive/10" onClick={() => handleRejectUser(user.id)}>
                        <UserX className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              User Management
            </CardTitle>
            <CardDescription>Manage all users in the system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="mentee">Mentee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Users Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === 'admin' ? 'default' : 
                                         user.role === 'mentor' ? 'secondary' : 'outline'}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'active' ? 'success' : 
                                         user.status === 'pending' ? 'warning' : 'destructive'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(user.dateJoined).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="mr-2 h-4 w-4" />Send Email
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuLabel>Role</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => handleChangeUserRole(user.id, 'admin')}>
                                <Shield className="mr-2 h-4 w-4" />Set as Admin
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleChangeUserRole(user.id, 'mentor')}>
                                <Shield className="mr-2 h-4 w-4" />Set as Mentor
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleChangeUserRole(user.id, 'mentee')}>
                                <Shield className="mr-2 h-4 w-4" />Set as Mentee
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuLabel>Status</DropdownMenuLabel>
                              {user.status !== 'active' && (
                                <DropdownMenuItem onClick={() => handleChangeUserStatus(user.id, 'active')}>
                                  <UserCheck className="mr-2 h-4 w-4 text-green-500" />Activate User
                                </DropdownMenuItem>
                              )}
                              {user.status !== 'suspended' && (
                                <DropdownMenuItem onClick={() => handleChangeUserStatus(user.id, 'suspended')}>
                                  <UserX className="mr-2 h-4 w-4 text-destructive" />Suspend User
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No users found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t p-4">
            <div className="text-sm text-muted-foreground">
              Showing {filteredUsers.length} of {users.length} users
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminUsers;
