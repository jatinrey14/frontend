import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu } from "lucide-react";

const technicalSkills = [
  { category: "Backend Development", items: ["Node.js", "NestJS", "Express", "REST APIs"] },
  { category: "Databases & Version Control", items: ["MySQL", "Git", "Render", "Postman"] },
  { category: "Frontend & UI", items: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"] },
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A brief overview of my background, technical focus, and professional journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary"/>
              Background & Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground text-sm">
            <p>
              I am an information technology student and software developer with a strong passion 
              for building robust backend web applications, robust database schemas, and clean user interfaces.
            </p>
            <p>
              My coursework and personal projects focus on modern full-stack architectures, ensuring efficient 
              server-side logic, secure authentication, and seamless integration.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary"/>
              Development Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground text-sm">
            <p>
              I believe in writing maintainable, well-structured code that scales effectively. Whether configuring 
              relational database relationships or optimizing API endpoints, quality and performance remain top priorities.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Technical Skills & Stack</CardTitle>
          <CardDescription>Tools, frameworks, and technologies I utilize in my projects.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {technicalSkills.map((group) => (
            <div key={group.category} className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}