import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">
          My academic background, degrees, and academic milestones.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Bachelor of Science in Information Technology
            </CardTitle>
            <CardDescription>University Name • 2022 — Present (Expected 2026)</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Focusing on software engineering, database management systems, algorithms, and modern web application development architectures.
            </p>
            <p className="font-medium text-foreground">Relevant Coursework:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Data Structures & Algorithms</li>
              <li>Advanced Database Systems</li>
              <li>Object-Oriented Programming</li>
              <li>Web Systems and Technologies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications & Achievements
            </CardTitle>
            <CardDescription>Continuous learning and specialized training</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <div>
              <p className="font-semibold text-foreground">Full-Stack Web Development Bootcamp</p>
              <p className="text-xs">Completed hands-on training with Node.js, React, and RESTful APIs.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Dean's Lister / Academic Honors</p>
              <p className="text-xs">Recognized for maintaining high academic standing across multiple semesters.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}