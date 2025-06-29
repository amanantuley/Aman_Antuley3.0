import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-12 animate-in fade-in-up slide-in-from-bottom-8 duration-700">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </section>
      
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8 animate-in fade-in-up slide-in-from-left-12 duration-700" style={{ animationDelay: '300ms' }}>
          <div className="flex items-start gap-4 group">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-primary/90 group-hover:scale-110">
              <Mail className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">Drop me a line anytime.</p>
              <a href="mailto:amanantuley3794@gmail.com" className="text-primary hover:underline">
                amanantuley3794@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-primary/90 group-hover:scale-110">
              <Phone className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">Mon-Fri from 9am to 5pm.</p>
              <a href="tel:9867408609" className="text-primary hover:underline">
                9867408609
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-primary/90 group-hover:scale-110">
              <MapPin className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-semibold">Location</h3>
              <p className="text-muted-foreground">Mumbai, India</p>
            </div>
          </div>
        </div>
        
        <div className="animate-in fade-in-up slide-in-from-right-12 duration-700" style={{ animationDelay: '450ms' }}>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
