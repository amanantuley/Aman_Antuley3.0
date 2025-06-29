import Link from 'next/link';
import { Github, Linkedin, Twitter, Code2, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/amanantuley' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/aman-antuley-8974ab26a/' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/AmanAntuley' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/aman._.antuley/' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/aman.antuley.1/' },
];

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4 lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 font-headline text-lg font-bold text-primary">
                <Code2 className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                <span>Aman Antuley</span>
            </Link>
            <p className="max-w-md text-sm text-muted-foreground">
                A Computer Engineering student passionate about building innovative solutions with a focus on web development and data science.
            </p>
          </div>
          
          <div>
            <h4 className="font-headline font-semibold text-foreground">Sitemap</h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold text-foreground">Get In Touch</h4>
            <ul className="mt-4 space-y-3">
               <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:amanantuley3794@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  amanantuley3794@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:9867408609" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  9867408609
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aman Antuley. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <Button asChild variant="ghost" size="icon" aria-label={link.name} key={link.name}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
