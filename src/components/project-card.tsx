import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  hint: string;
  tags: string[];
  liveHref: string;
  codeHref: string;
};

export function ProjectCard({ title, description, image, hint, tags, liveHref, codeHref }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-52 w-full bg-muted">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" 
          data-ai-hint={hint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 bg-transparent pt-0">
        <Button asChild>
          <Link href={liveHref} target="_blank" rel="noopener noreferrer">Live Site</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={codeHref} target="_blank" rel="noopener noreferrer">View Code</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
