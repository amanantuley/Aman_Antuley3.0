import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Post } from '@/lib/blog-data';
import { format } from 'date-fns';

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-52 w-full bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={post.hint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl group-hover:text-primary">{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {format(new Date(post.date), 'MMMM d, yyyy')} by {post.author}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
    </Card>
  );
}
