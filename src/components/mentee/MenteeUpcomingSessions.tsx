
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const MenteeUpcomingSessions = () => {
  const upcomingSessions = [
    {
      id: 1,
      title: "React Performance Optimization",
      mentor: "Jane Doe",
      date: "2025-04-24",
      time: "15:00",
      duration: "60",
      meetingLink: "https://meet.google.com/abc-defg-hij"
    },
    {
      id: 2,
      title: "API Design Best Practices",
      mentor: "Michael Johnson",
      date: "2025-04-26",
      time: "10:00",
      duration: "45",
      meetingLink: "https://meet.google.com/xyz-uvwx-yz"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>Your scheduled mentorship sessions</CardDescription>
        </div>
        <Button variant="outline" asChild>
          <Link to="/mentee/sessions">View All Sessions</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="flex flex-col md:flex-row justify-between p-4 border rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="space-y-2">
                <h4 className="font-semibold">{session.title}</h4>
                <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {session.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {session.time} ({session.duration} min)
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <Button asChild>
                  <a href={session.meetingLink} target="_blank" rel="noopener noreferrer">
                    Join Session
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenteeUpcomingSessions;
