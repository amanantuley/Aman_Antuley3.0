export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  hint: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks for Cleaner Code',
    author: 'Aman Antuley',
    date: '2024-07-20',
    excerpt: 'Dive deep into React Hooks and learn how to write more readable, maintainable, and efficient components.',
    image: 'https://placehold.co/600x400.png',
    hint: 'code screen',
    content: `
<p>React Hooks have revolutionized the way we write components. Before hooks, we had to rely on class components to manage state and lifecycle methods. Now, with hooks like <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>, we can do all of that and more in functional components.</p>
<h2>Why Hooks?</h2>
<p>Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easier to share logic between components and keep your codebase DRY (Don't Repeat Yourself).</p>
<h3>useState</h3>
<p>The <code>useState</code> hook is the most basic and essential hook. It allows you to add state to your functional components. For example:</p>
<pre><code class="language-jsx">const [count, setCount] = useState(0);</code></pre>
<p>This simple line of code gives you a state variable <code>count</code> and a function <code>setCount</code> to update it.</p>
<h3>useEffect</h3>
<p>The <code>useEffect</code> hook lets you perform side effects in functional components. It's a close replacement for <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in class components. Here's an example that updates the document title:</p>
<pre><code class="language-jsx">useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]); // Only re-run the effect if count changes
</code></pre>
<p>By mastering these hooks, you can write cleaner, more modular, and more maintainable React applications.</p>
`,
  },
  {
    slug: 'nextjs-14-features',
    title: 'Top 5 Features in Next.js 14 You Should Know',
    author: 'Aman Antuley',
    date: '2024-06-15',
    excerpt: 'Next.js 14 brings a host of new features and improvements. Here are the top 5 that will change the way you build apps.',
    image: 'https://placehold.co/600x400.png',
    hint: 'server architecture',
    content: '<p>Content for Next.js 14 features... This is placeholder content for the blog post about Next.js 14. In a real blog post, this section would be filled with details about server actions, partial pre-rendering, and other exciting new features. It would include code examples and explanations to help developers understand and adopt these new capabilities in their projects.</p>',
  },
  {
    slug: 'tailwind-css-deep-dive',
    title: 'A Deep Dive into Tailwind CSS for Modern UIs',
    author: 'Aman Antuley',
    date: '2024-05-30',
    excerpt: 'Explore the utility-first approach of Tailwind CSS and learn how to build complex user interfaces rapidly.',
    image: 'https://placehold.co/600x400.png',
    hint: 'design system',
    content: '<p>Content for Tailwind CSS deep dive... This is placeholder content for a deep dive into Tailwind CSS. A complete article would discuss the philosophy behind utility-first CSS, how to set up and customize Tailwind, and practical examples of building complex components. It would also cover advanced topics like plugins, theming, and performance optimization techniques.</p>',
  },
];

export const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug);
};
