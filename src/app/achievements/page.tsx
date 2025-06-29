
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, BookOpen, Link as LinkIcon, Award } from 'lucide-react';

const achievements = [
  {
    title: "Technical Team Member",
    issuer: "Google Developer Group (GDG)",
    year: "Oct 2024 - Present",
    description: "Contributed to community projects and events.",
  },
  {
    title: "Technical Manager",
    issuer: "ReachSphere Infotech",
    year: "",
    description: "Led and managed technical projects and teams.",
  },
  {
    title: "TechAstra 2.0 Runner-up",
    issuer: "Project Competition",
    year: "",
    description: "Achieved runner-up position in a competitive project competition.",
  },
  {
    title: "Technical Team Member",
    issuer: "Algorithm 9.0",
    year: "",
    description: "Active member of the technical team for Algorithm 9.0.",
  },
   {
    title: "Hackathon Participant",
    issuer: "9 Different Hackathons",
    year: "",
    description: "Experienced participant in multiple hackathons, developing innovative solutions under pressure.",
  },
   {
    title: "Campus Ambassador",
    issuer: "Devtown",
    year: "",
    description: "Represented and promoted Devtown on campus.",
  },
];

const publications = [
  {
    title: "The Impact of Server-Side Rendering on Web Performance",
    journal: "Journal of Web Engineering",
    year: "2023",
    description: "A comprehensive study on the performance benefits of SSR in modern web applications, comparing it with client-side rendering.",
    link: "#",
  },
  {
    title: "Scalable State Management in Large React Applications",
    conference: "ReactConf Global",
    year: "2022",
    description: "Presented a novel approach to state management using context and hooks for large-scale applications.",
    link: "#",
  },
];

const certifications = [
  {
    title: "Python Programming",
    issuer: "Coursera",
    year: "",
    description: "Mastered Python fundamentals and advanced concepts through Coursera.",
    link: "#",
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    year: "",
    description: "Completed NPTEL certification on Data Analytics using Python.",
    link: "#",
  },
  {
    title: "R Programming",
    issuer: "Udemy",
    year: "",
    description: "Gained proficiency in R for statistical computing and graphics.",
    link: "#",
  },
  {
    title: "Machine Learning",
    issuer: "MicroMasters",
    year: "",
    description: "Completed a MicroMasters program in Machine Learning.",
    link: "#",
  },
];

export default function AchievementsPage() {
  return (
    <div className="container py-12 animate-in fade-in-up slide-in-from-bottom-8 duration-700">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          My Achievements
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
          A showcase of my awards, recognitions, and personal milestones.
        </p>
      </section>

      <section>
         <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
          {achievements.map((ach, i) => (
            <div key={ach.title} className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse animate-in fade-in-up slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${300 + i * 150}ms`}}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary shadow-md md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-300 group-hover:scale-125">
                <Trophy className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{ach.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{ach.issuer} {ach.year && `| ${ach.year}`}</p>
                  </CardHeader>
                   <CardContent>
                    <p className="text-sm text-muted-foreground">{ach.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Publications
        </h2>
         <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
          {publications.map((pub, i) => (
            <div key={pub.title} className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse animate-in fade-in-up slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${300 + (achievements.length + i) * 150}ms`}}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary shadow-md md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-300 group-hover:scale-125">
                <BookOpen className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{pub.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pub.journal || pub.conference} | {pub.year}</p>
                  </CardHeader>
                   <CardContent>
                    <p className="text-sm text-muted-foreground">{pub.description}</p>
                    {pub.link && (
                       <a href={pub.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline">
                        Read Publication
                        <LinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Certifications
        </h2>
         <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
          {certifications.map((cert, i) => (
            <div key={cert.title} className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse animate-in fade-in-up slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${300 + (achievements.length + publications.length + i) * 150}ms`}}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary shadow-md md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-300 group-hover:scale-125">
                <Award className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer} {cert.year && `| ${cert.year}`}</p>
                  </CardHeader>
                   <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                    {cert.link && (
                       <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline">
                        View Credential
                        <LinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
