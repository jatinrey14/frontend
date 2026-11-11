import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Welcome to my digital space
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I'm a Developer & Tech Enthusiast
        </h1>
        <p className="text-lg text-muted-foreground">
          I build scalable web applications, design clean backend systems, and love exploring new technologies and creative hobbies.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild>
            <Link href="/about" className="gap-2">
              Learn more about me <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/education">View Education</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}