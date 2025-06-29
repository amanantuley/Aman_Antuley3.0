
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight, Briefcase, Mail, Trophy, Download, Shapes } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TypingAnimation } from '@/components/typing-animation';
import React from 'react';

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2.002c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.002c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"></path><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse><ellipse cx="12" cy="12" rx="4" ry="10"></ellipse></svg>
);
const TailwindCssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
);
const BootstrapIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.18 3.018a2.53 2.53 0 0 0-2.36 0L4.35 6.4a2.53 2.53 0 0 0-1.35 2.18v6.84a2.53 2.53 0 0 0 1.35 2.18l6.47 3.38a2.53 2.53 0 0 0 2.36 0l6.47-3.38a2.53 2.53 0 0 0 1.35-2.18V8.58a2.53 2.53 0 0 0-1.35-2.18L13.18 3.018zM12 17.5a5.5 5.5 0 0 1-5.5-5.5A5.5 5.5 0 0 1 12 6.5a5.5 5.5 0 0 1 5.5 5.5A5.5 5.5 0 0 1 12 17.5z"/>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
);
const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.62 13.54c-.64.64-1.49.97-2.45.97h-2.17v-4h2.17c.96 0 1.81.33 2.45.97.64.64.97 1.49.97 2.45s-.33 1.81-.97 2.45zm-6.2-7.08v-2h6.16v2H10.42zm4.14 5.08c-.32-.32-.74-.49-1.22-.49h-1.75v3.08h1.75c.48 0 .9-.17 1.22-.49.32-.32.49-.74.49-1.22s-.17-.9-.49-1.22z" fill="#306998"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.58 6.46c-.64-.64-1.49-.97-2.45-.97h-2.17v4h2.17c.96 0 1.81-.33 2.45-.97.64-.64.97-1.49.97-2.45s-.33-1.81-.97-2.45zm-6.16 7.08v2h-6.16v-2h6.16zm-4.14-5.08c.32.32.74.49 1.22.49h1.75v-3.08h-1.75c-.48 0-.9.17-1.22.49-.32.32-.49.74-.49 1.22s.17.9.49 1.22z" fill="#FFD43B"/>
    </svg>
);
const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#5382a1" d="M18.12,14.03a3.5,3.5,0,0,1-3.41,2.8,3.33,3.33,0,0,1-3.23-2.61,4.33,4.33,0,0,1,.13-2.22,2.18,2.18,0,0,1,1.21-1.37,1.87,1.87,0,0,0,1.19-.83,1,1,0,0,0-.11-1.07,1.13,1.13,0,0,0-1.52-.15,1.4,1.4,0,0,0-.49,1.88,1.21,1.21,0,0,1-1.83.83,3.48,3.48,0,0,1,.29-5.1,3.13,3.13,0,0,1,4.42.43,3.33,3.33,0,0,1,.53,4.42,4.64,4.64,0,0,0-1,1.69A3.87,3.87,0,0,0,18.12,14.03Z"/>
        <path fill="#f89820" d="M12.18,17.1a3.42,3.42,0,0,1-2.48,1.18,3.22,3.22,0,0,1-2.66-1.12,3.37,3.37,0,0,1,0-4.3,3.13,3.13,0,0,1,4.25-.1,1.35,1.35,0,0,0,1.72,0,1.29,1.29,0,0,0,.15-1.79,1.23,1.23,0,0,0-1.82-.4,3.27,3.27,0,0,0-1.19,4.2,3.23,3.23,0,0,0,4.24,1.13,3.33,3.33,0,0,0,1.12-4.24,3.47,3.47,0,0,1-.58,4.14A3.19,3.19,0,0,1,12.18,17.1Z"/>
    </svg>
);
const HtmlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.315.002.69 7.822h11.23l-.396 4.425-2.652.766-2.652-.766-.156-1.765h-2.133l.301 3.391 4.64 1.353 4.638-1.353.689-7.823H8.531z" fill="#E34F26"/>
    </svg>
);
const CssIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h10.059l.23-2.622H5.43l.69 7.822h11.23l-.396 4.425-2.652.766-2.652-.766-.156-1.765h-2.133l.301 3.391 4.64 1.353 4.638-1.353.689-7.823H8.531z" fill="#1572B6"/>
    </svg>
);
const RIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 14h-3v-5h3c1.38 0 2.5-1.12 2.5-2.5S14.88 6 13.5 6h-3v2h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3v7h5v-2h-2v-1.5h2V16z" fill="#1f69b3"/>
  </svg>
);
const MySqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="35" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">MySQL</text>
        <path d="M85 20 c-2-5 -5-4 -8 2 c-3 6 0 8 3 4 c3-4 6-2 9 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
);
const MongoDbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.42 16.8V9.89c0-1.08.2-2.12.56-3.08-1.23-.2-2.5-.28-3.79-.28-3.54 0-6.7 1.4-6.7 5.27 0 2.25 1.57 4.12 3.8 4.72.63.17 1.27.27 1.93.3l.02 2.8c-2.43-.31-4.48-1.79-5.75-3.95-1.2-2.06-1.5-4.43-1.08-6.6.46-2.36 2-4.52 4.22-5.96C9.9 2.7 11.95 2.2 14.1 2.42c.8.08 1.58.26 2.34.52C14.79 3.98 14 5.4 14 6.91v9.89h1.42z"/>
    </svg>
);
const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.95 10.95l-9.9-9.9a1.5 1.5 0 0 0-2.1 0l-9.9 9.9a1.5 1.5 0 0 0 0 2.1l4.2 4.2V13.5A1.5 1.5 0 0 1 6.6 12h2.85a1.5 1.5 0 0 1 1.5 1.5v5.7l2.1 2.1a1.5 1.5 0 0 0 2.1 0l7.8-7.8a1.5 1.5 0 0 0 0-2.1zM12 20.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm-6-6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm6-12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
    </svg>
);
const VscodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.15 16.9l-4.2-11.41a1.26 1.26 0 00-1.45-.89L2.83 8.36a1.26 1.26 0 00-.89 1.45l4.19 11.41a1.26 1.26 0 001.45.89l14.67-3.76a1.26 1.26 0 00.89-1.45zM8.32 18.59l-2.73-7.46 10.45-2.69 2.74 7.46-10.46 2.69zm7.13-9.53l-6.32 1.62 1.22 4.51 6.32-1.61-1.22-4.52z"/>
    </svg>
);
const PostmanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 10.375a.375.375 0 00-.375-.375h-2.293a.375.375 0 000 .75h1.918v8.875h-1.918a.375.375 0 100 .75h2.293a.375.375 0 00.375-.375V10.375zm-19-1.5a.375.375 0 00-.375.375v9.25c0 .207.168.375.375.375h2.293a.375.375 0 100-.75H3.25V9.25H5.17a.375.375 0 100-.75H2.875a.375.375 0 00-.375.375zM12 1.625a5.875 5.875 0 100 11.75 5.875 5.875 0 000-11.75zm0 10.25a4.375 4.375 0 110-8.75 4.375 4.375 0 010 8.75zm.75-5.125a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0v1.5zm-3.125 4.5a3.125 3.125 0 106.25 0h-6.25z"/>
    </svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);
const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 19.78h20L12 2z"/>
    </svg>
);

const NextJsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M12.001 2.002c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm5.242 14.22h-1.579v-5.26l-3.322 5.26h-1.696V7.782h1.579v5.26l3.322-5.26h1.696v8.44z"/>
    </svg>
);
const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M9.4 16.6h1.2v-7.2h-1.2v7.2zM14.5 16.6h1.2V12c0-.8-.2-1.5-.7-1.9s-1.1-.7-1.8-.7c-.8 0-1.4.3-1.9.8-.5.5-.7 1.2-.7 2v4.4h1.2v-4c0-.5.1-.9.3-1.2s.5-.4.8-.4c.3 0 .6.1.8.4.2.3.3.7.3 1.2v4.z"/>
    </svg>
);
const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm16.425 5.578h-3.11v11.02h-3.696V5.578h-3.11V2.619h9.916v2.96z"/>
    </svg>
);

const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.5h8v8h-8v-8zM2.5 12.5h8v8h-8v-8zM11.5 3.5h8v8h-8v-8zM11.5 12.5h8v8h-8v-8z"/>
    </svg>
);
const LinuxIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4,1.05a10,10,0,0,0-9.2,5.7,10,10,0,0,0,6.6,15.1,10,10,0,0,0,10-6.6,10,10,0,0,0-7.4-14.2Zm-3,5.6a1.5,1.5,0,1,1,0,3,1.5,1.5,0,0,1,0-3Zm7.2,0a1.5,1.5,0,1,1,0,3,1.5,1.5,0,0,1,0-3Zm-3.6,12.5a5.5,5.5,0,0,1-4.7-2.6.5.5,0,0,1,.4-.8h8.6a.5.5,0,0,1,.4.8,5.5,5.5,0,0,1-4.7,2.6Z"/>
    </svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6 8.51c-.6-1.7-1.9-3.1-3.6-3.8-.5-.2-1-.3-1.5-.4C15.6 2.31 13.4 1 11 1 8.6 1 6.4 2.31 5.5 4.31c-.5.1-1 .2-1.5.4-1.7.7-3 2.1-3.6 3.8-.3.9-.4 1.8-.3 2.7.2 2.3 1.5 4.4 3.4 5.7v1.8c0 .5.4.9.9.9h1.7c.3 0 .5-.1.7-.3v-1.9c0-.5.4-.9.9-.9h4.4c.5 0 .9.4.9.9v1.9c.2.2.4.3.7.3h1.7c.5 0 .9-.4.9-.9v-1.8c1.9-1.3 3.2-3.4 3.4-5.7.1-.9 0-1.8-.3-2.7zM7.5 7.4h1.9v1.9H7.5V7.4zm-2.2 0h1.9v1.9H5.3V7.4zm4.3 0h1.9v1.9H9.6V7.4zm2.2 3.3H9.9v-1.9h1.9v1.9zm-2.2 0H7.7v-1.9h1.9v1.9z"/>
    </svg>
);

const skills = [
  { name: 'HTML', icon: <HtmlIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'CSS', icon: <CssIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Tailwind CSS', icon: <TailwindCssIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Bootstrap', icon: <BootstrapIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'JavaScript', icon: <JavaScriptIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'TypeScript', icon: <TypeScriptIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'React', icon: <ReactIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Next.js', icon: <NextJsIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Python', icon: <PythonIcon className="h-7 w-7 sm:h-8 sm:w-8" /> },
  { name: 'Java', icon: <JavaIcon className="h-7 w-7 sm:h-8 sm:w-8" /> },
  { name: 'R', icon: <RIcon className="h-7 w-7 sm:h-8 sm:w-8" /> },
  { name: 'SQL', icon: <MySqlIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'MongoDB', icon: <MongoDbIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
];

const tools = [
  { name: 'VS Code', icon: <VscodeIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Git', icon: <GitIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'GitHub', icon: <GithubIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Postman', icon: <PostmanIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Vercel', icon: <VercelIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Windows', icon: <WindowsIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Linux', icon: <LinuxIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
  { name: 'Docker', icon: <DockerIcon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary-foreground sm:h-8 sm:w-8" /> },
];


const featuredProjects = [
  {
    title: 'PerfectFit - AI Tailoring System',
    description: 'A web platform connecting tailors and customers for custom-fit clothing orders, leveraging OpenCV and TensorFlow to analyze body shapes and automate size estimation.',
    image: '/PerfectFit.png',
    hint: 'fashion tech',
    tags: ['ML', 'Computer Vision', 'Next.js', 'TensorFlow'],
    liveHref: '#',
    codeHref: '#',
  },
  {
    title: 'Smart Traffic Signal',
    description: 'An AI-powered system using OpenCV for real-time vehicle detection and ML to predict congestion, dynamically optimizing signal timing and reducing delays.',
    image: '/smartTrafic.png',
    hint: 'smart city',
    tags: ['Python', 'OpenCV', 'IoT', 'ML'],
    liveHref: '#',
    codeHref: '#',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 sm:gap-32 md:gap-40">
      <section className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-top-4 duration-700">
          Aman Antuley
        </h1>
        <div 
            className="mx-auto mt-4 flex min-h-16 flex-wrap justify-center items-center gap-x-2 text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-top-4 duration-700" 
            style={{ animationDelay: '200ms' }}
        >
          <span>I'm a</span>
          <TypingAnimation strings={['Computer Engineering Student', 'Free Lancer', 'Data Analyst', 'Open Source Contributor']} />
        </div>
        <p 
          className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground animate-in fade-in slide-in-from-top-4 duration-700"
          style={{ animationDelay: '300ms' }}
        >
         A Computer Engineering student with expertise in Front-End Development and a strong passion for Data Science and Machine Learning.
        </p>
        <div 
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700" 
          style={{ animationDelay: '400ms' }}
        >
          <Button asChild size="lg">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/23CO25_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download My Resume
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="container animate-in fade-in-up slide-in-from-bottom-8 duration-700" style={{ animationDelay: '500ms' }}>
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <div className="md:col-span-2 group">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/aman photo.png" 
                alt="Aman Antuley" 
                fill 
                className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              A Little About Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm a Computer Engineering student passionate about Front-End Development, Data Science, and Machine Learning. Experienced in Hackathons and Internships, I have strong problem-solving and teamwork skills, and I'm eager to grow in software development.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/about">
                More About Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="container animate-in fade-in-up slide-in-from-bottom-8 duration-700">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 sm:gap-10">
          {skills.map((skill, i) => (
            <div key={skill.name} className="group flex flex-col items-center gap-3 text-center animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: `${300 + i * 100}ms` }}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:-translate-y-2 sm:h-24 sm:w-24">
                {skill.icon}
              </div>
              <p className="font-medium text-muted-foreground transition-colors group-hover:text-primary">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="container animate-in fade-in-up slide-in-from-bottom-8 duration-700">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Tools I Use
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 sm:gap-10">
          {tools.map((tool, i) => (
            <div key={tool.name} className="group flex flex-col items-center gap-3 text-center animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: `${300 + i * 100}ms` }}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:-translate-y-2 sm:h-24 sm:w-24">
                {tool.icon}
              </div>
              <p className="font-medium text-muted-foreground transition-colors group-hover:text-primary">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl animate-in fade-in-up duration-500">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
           {featuredProjects.map((project, i) => (
            <div key={project.title} className="animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: `${300 + i * 150}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects" className={cn(buttonVariants({ variant: "link" }), "text-lg")}>
              See all projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: '300ms' }}>
            <Card className="flex flex-col items-center p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Briefcase className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl font-bold">About Me</h3>
              <p className="mt-2 text-muted-foreground">Discover my journey, experience, and passions.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/about">Read More</Link>
              </Button>
            </Card>
          </div>
          <div className="animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: '400ms' }}>
            <Card className="flex flex-col items-center p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Shapes className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl font-bold">My Skills</h3>
              <p className="mt-2 text-muted-foreground">A look at the technologies I work with.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/#skills">View Skills</Link>
              </Button>
            </Card>
          </div>
          <div className="animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: '500ms' }}>
            <Card className="flex flex-col items-center p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Trophy className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl font-bold">My Achievements</h3>
              <p className="mt-2 text-muted-foreground">A showcase of my awards and recognitions.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/achievements">View Achievements</Link>
              </Button>
            </Card>
          </div>
          <div className="animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: '600ms' }}>
            <Card className="flex flex-col items-center p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Mail className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-headline text-2xl font-bold">Contact Me</h3>
              <p className="mt-2 text-muted-foreground">Have a project or question? Let's connect.</p>
              <Button asChild className="mt-4">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
