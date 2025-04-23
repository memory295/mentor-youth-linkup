
import { Card, CardContent } from "@/components/ui/card";
import { Users, Book, Calendar, MessageSquare } from "lucide-react";

const MenteeStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardContent className="p-6 flex flex-row items-center space-x-4">
          <div className="p-2 bg-primary/10 rounded-full">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">My Mentors</p>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-row items-center space-x-4">
          <div className="p-2 bg-must-teal/10 rounded-full">
            <Book className="h-6 w-6 text-must-teal" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
            <h3 className="text-2xl font-bold">3</h3>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-row items-center space-x-4">
          <div className="p-2 bg-must-blue/10 rounded-full">
            <Calendar className="h-6 w-6 text-must-blue" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Upcoming Sessions</p>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-row items-center space-x-4">
          <div className="p-2 bg-must-blue-dark/10 rounded-full">
            <MessageSquare className="h-6 w-6 text-must-blue-dark" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Unread Messages</p>
            <h3 className="text-2xl font-bold">5</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MenteeStats;
