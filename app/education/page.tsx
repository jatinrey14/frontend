import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "Master in Information Technology",
    institution: "Ateneo Naga University",
    period: "2012 - 2016",
    description: "Focused on software engineering, data structures, algorithms, and web development.",
    achievements: ["Magna Cum Laude", "Dean's List (All Semesters)", "Capstone Project Lead"],
  },
  {
    degree: "BS in Information Technology",
    institution: "University of Nueva Caceres",
    period: "2005 - 2010",
    description: "Intensive program covering React, Node.js, databases, and deployment.",
    achievements: ["Built 3 full-stack applications", "Peer Code Reviewer"],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background and formal training.</p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key="{idx}">
            <CardHeader className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="h-6 w-6"/>
                </div>
                <div>
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                </div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {item.period}
              </span>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  <Award className="h-4 w-4 text-primary"/> Key Highlights
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}