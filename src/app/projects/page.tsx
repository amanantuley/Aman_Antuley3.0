
import { ProjectCard } from '@/components/project-card';

const allProjects = [
  {
    title: 'PerfectFit - AI Tailoring System',
    description: 'A web platform for custom-fit clothing orders using AI body measurements. Leveraged OpenCV and TensorFlow to improve accuracy by 25%.',
    image: '/PerfectFit.png', hint: 'fashion tech',
    tags: ['ML', 'Computer Vision', 'Next.js', 'TensorFlow'],
    liveHref: '#', codeHref: '#',
  },
  {
    title: 'Smart Traffic Signal',
    description: 'An AI-powered system using OpenCV for real-time vehicle detection and ML to predict congestion, improving efficiency by 50% and reducing delays by 70%.',
    image: '/smartTrafic.png', hint: 'smart city',
    tags: ['Python', 'OpenCV', 'IoT', 'ML'],
    liveHref: '#', codeHref: '#',
  },
  {
    title: 'AI-Powered Task Optimization',
    description: 'A real-time emotion detection system using webcam input and DeepFace for intelligent task suggestions, achieving over 90% accuracy.',
    image: '/task.png', hint: 'AI analytics',
    tags: ['Python', 'ML', 'OpenCV', 'DeepFace'],
    liveHref: '#', codeHref: '#',
  },
  {
    title: 'Sign Language Detection',
    description: 'A real-time system using computer vision to translate sign language gestures into text, improving accessibility.',
    image: '/sign.png', hint: 'accessibility tech',
    tags: ['Computer Vision', 'Python', 'OpenCV', 'Deep Learning'],
    liveHref: '#', codeHref: '#',
  },
  {
    title: 'Neki Hub – Volunteer Platform',
    description: 'A student-led initiative connecting volunteers\' skills with community needs, empowering talent for social impact.',
    image: '/neki.png', hint: 'community platform',
    tags: ['React', 'Node.js', 'Community', 'Volunteering'],
    liveHref: '#', codeHref: '#',
  },
  {
    title: 'Personal Fitness Tracker',
    description: 'A personal fitness tracker to log workouts, track nutrition, set goals, and monitor progress to stay fit and motivated.',
    image: '/firness.png',
    hint: 'fitness workout',
    tags: ['React', 'Firebase', 'Data Visualization', 'PWA'],
    liveHref: '#',
    codeHref: '#',
  },
  {
    title: 'Course Recommendation System',
    description: 'A system that recommends courses to users based on their interests and learning history.',
    image: '/course.png',
    hint: 'elearning online',
    tags: ['Python', 'ML', 'Data Science', 'Flask'],
    liveHref: '#',
    codeHref: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12 animate-in fade-in-up slide-in-from-bottom-8 duration-700">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          My Projects
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
          Here's a selection of projects I've worked on.
        </p>
      </section>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, i) => (
           <div key={project.title} className="animate-in fade-in-up slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${150 + i * 100}ms`}}>
              <ProjectCard {...project} />
           </div>
        ))}
      </div>
    </div>
  );
}
