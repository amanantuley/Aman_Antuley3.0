import Link from 'next/link';
import { BlogPostCard } from '@/components/blog-post-card';
import { posts } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <div className="container py-12 animate-in fade-in-up slide-in-from-bottom-8 duration-700">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          My Blog
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
          Thoughts on technology, development, and life.
        </p>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
           <div key={post.slug} className="animate-in fade-in-up slide-in-from-bottom-4" style={{ animationDelay: `${150 + i * 100}ms`}}>
            <Link href={`/blog/${post.slug}`} className="h-full block">
              <BlogPostCard post={post} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
