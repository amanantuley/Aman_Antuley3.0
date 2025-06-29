
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';
import { GithubContributionGraph } from '@/components/github-contribution-graph';

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M13.483 0L11.992 4.31H4.303L8.853 16.12H11.992L16.243 4.31H20L13.483 0Z"/>
    </svg>
);
  
const GfgIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M11.984 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2.28 15.602l-1.32.96-.48-1.92-2.16-1.2.48 2.16-1.2 1.56 2.04.24.96 2.04.12-2.16 2.28.12zm4.32-1.92l.72 1.68 1.44-1.2-1.44-1.08.6-1.8-1.56.96-1.8-.48.12 2.04-1.44-.12.96 1.92.96-1.92zm-2.04-3.36l-1.08.002-.36-2.16-1.56 1.08.24 1.8-1.32.36 1.44 1.2 1.2-1.56.6 1.44.84-.96-1.08-1.2z"/>
    </svg>
);

const experience = [
  {
    role: "IBM SkillBuild Internship",
    company: "EduNet Foundation",
    period: "June 2025 - Aug 2025",
    description: "Completed an intensive internship focused on core technical and professional skills, including AI, data science fundamentals, and cloud computing through the IBM SkillBuild platform.",
  },
  {
    role: "Data Science Intern",
    company: "Zidio Development",
    period: "March 2025 - June 2025",
    description: "Improved data analysis efficiency by 25% by analyzing large datasets and building predictive models. Created interactive dashboards for clients.",
  },
  {
    role: "AI Intern",
    company: "AICTE @ Edunet Foundation",
    period: "Feb 2025 - March 2025",
    description: "Developed a Personal Fitness Tracker using Python, improving tracking accuracy by 15% and building strong foundations in machine learning and data analysis.",
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    period: "June 2024 - Present",
    description: "Data Science & Analytics | Front-End Development. Improved client requirement gathering, enhanced data visualization with interactive dashboards, and developed responsive, user-friendly web interfaces.",
  },
];

const education = [
  {
    degree: "B.E. Computer Engineering | CGPA: 8.51/10",
    institution: "University of Mumbai: Anjuman-I-Islam Kalsekar Technical Campus",
    period: "July 2023 - June 2027",
  },
  {
    degree: "HSC (Higher Secondary Certificate) - 70%",
    institution: "MESCO Crescent English High School",
    period: "2021 - 2023",
  },
  {
    degree: "SSC (Secondary School Certificate) - 81%",
    institution: "Symbiosis Convent High School",
    period: "2008 - 2021",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12">
      <section className="grid gap-12 md:grid-cols-3 animate-in fade-in-up slide-in-from-bottom-8 duration-700">
        <div className="md:col-span-1">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg shadow-lg group">
            <Image src="/aman photo.png" alt="Aman Antuley" fill className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            I’m Aman Antuley, a passionate and driven Computer Engineering student from Anjuman-I-Islam’s School of Engineering and Technology, Mumbai. I specialize in web development, AI/ML, and data analytics, with a strong foundation in programming languages like Python, Java, R, and web development frameworks.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I’ve successfully built impactful projects including an AI-powered tailoring platform (PerfectFit), a Smart Attendance System, and a Personal Fitness Tracker during my AICTE internship. My work has been recognized in various hackathons like Smart India Hackathon (Top 5) and Algorithm 8.0/9.0.
          </p>
           <p className="mt-4 text-lg text-muted-foreground">
            Beyond development, I enjoy solving real-world problems through technology and aim to deliver innovative, scalable solutions. I actively contribute to team projects, take ownership of my learning, and continuously strive to grow as a developer and engineer.
          </p>
        </div>
      </section>

      <section className="mt-20 animate-in fade-in-up slide-in-from-bottom-8 duration-700" style={{ animationDelay: '150ms' }}>
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
        <div className="relative mx-auto max-w-3xl space-y-8 before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-border">
          {experience.map((exp, i) => (
            <div key={exp.company} className="group relative pl-12 sm:pl-14 animate-in fade-in-up slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${300 + i * 150}ms`}}>
              <div className="absolute left-5 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-md transition-transform duration-300 group-hover:scale-125">
                <Briefcase className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:-rotate-6" />
              </div>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-20 animate-in fade-in-up slide-in-from-bottom-8 duration-700" style={{ animationDelay: '300ms' }}>
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
         <div className="relative mx-auto max-w-3xl space-y-8 before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-border">
          {education.map((edu, i) => (
            <div key={edu.institution} className="group relative pl-12 sm:pl-14 animate-in fade-in-up slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${450 + i * 150}ms`}}>
              <div className="absolute left-5 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-md transition-transform duration-300 group-hover:scale-125">
                <GraduationCap className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 animate-in fade-in-up slide-in-from-bottom-8 duration-700" style={{ animationDelay: '450ms' }}>
        <GithubContributionGraph username="amanantuley" />
      </section>

      <section className="mt-20 animate-in fade-in-up slide-in-from-bottom-8 duration-700" style={{ animationDelay: '600ms' }}>
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Coding Profiles</h2>
        <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
            <Card className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <LeetCodeIcon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-bold">LeetCode</h3>
                <p className="mt-2 text-muted-foreground">Sharpening algorithmic skills with Data Structures and Algorithms.</p>
                <Button asChild variant="outline" className="mt-4">
                    <a href="https://leetcode.com/u/amanantuley/" target="_blank" rel="noopener noreferrer">View Profile</a>
                </Button>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <GfgIcon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-headline text-2xl font-bold">GeeksforGeeks</h3>
                <p className="mt-2 text-muted-foreground">Active problem-solver and contributor on GeeksforGeeks.</p>
                <Button asChild variant="outline" className="mt-4">
                    <a href="https://www.geeksforgeeks.org/user/amanantuley/" target="_blank" rel="noopener noreferrer">View Profile</a>
                </Button>
            </Card>
        </div>
      </section>
    </div>
  );
}
