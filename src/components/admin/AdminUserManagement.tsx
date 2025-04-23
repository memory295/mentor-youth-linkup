
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, UserCheck, UserX } from "lucide-react";

const AdminUserManagement = () => {
  const [users] = useState([
    { id: 1, name: "John Doe", role: "mentor", status: "active", email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "mentee", status: "pending", email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", role: "mentor", status: "active", email: "mike@example.com" },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>Manage system users and their roles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
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
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`px-2 py-1 rounded-full text-xs ${
                  user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {user.status}
                </div>
                <Button variant="ghost" size="icon">
                  {user.status === 'active' ? (
                    <UserX className="h-4 w-4 text-destructive" />
                  ) : (
                    <UserCheck className="h-4 w-4 text-primary" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminUserManagement;
