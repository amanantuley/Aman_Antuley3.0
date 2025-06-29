import { getPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

import './prose-styles.css';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-12 animate-in fade-in-up slide-in-from-bottom-8 duration-700">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
        </div>
      </div>
      
      <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg shadow-lg">
        <Image src={post.image} alt={post.title} fill className="object-cover" data-ai-hint={post.hint} />
      </div>

      <div
        className="prose prose-lg dark:prose-invert mx-auto max-w-none font-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
