import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Camera, BookOpen, Music } from "lucide-react";

const hobbies = [
  {
    title: "Gaming & Game Dev",
    description: "Enjoy puzzle-platformers and strategy games, and occasionally experimenting with small indie game prototypes.",
    icon: Gamepad2,
  },
  {
    title: "Photography",
    description: "Capturing streetscapes, nature, and architectural details during my weekend walks and travels.",
    icon: Camera,
  },
  {
    title: "Tech Reading & Sci-Fi",
    description: "Reading speculative sci-fi novels and staying up to date with modern software engineering blogs and architectural patterns.",
    icon: BookOpen,
  },
  {
    title: "Lo-Fi & Instrumental Music",
    description: "Listening to and collecting instrumental beats and lo-fi tracks to stay focused while coding.",
    icon: Music,
  },
];

export default function HobbyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">
          What I enjoy doing when I'm not writing code or studying.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby) => {
          const IconComponent = hobby.icon;
          return (
            <Card key={hobby.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <IconComponent className="h-5 w-5 text-primary" />
                  {hobby.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}