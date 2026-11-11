export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        {/* Navigation Bar */}
        <header className="border-b border-border/40 sticky top-0 z-50 bg-background/80 backdrop-blur">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight">
              Portfolio<span className="text-primary">.</span>
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/education" className="hover:text-foreground transition-colors">Education</Link>
              <Link href="/hobby" className="hover:text-foreground transition-colors">Hobby</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 py-10 px-6 max-w-4xl mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} • Built with Next.js & Tailwind CSS
        </footer>
      </body>
    </html>
  );
}