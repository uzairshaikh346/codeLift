import LanguagePage from '@/components/LanguagePage';

const nextjsCourses = [
  {
    title: 'Next.js Foundations',
    description: 'Learn the basics of Next.js, including routing, data fetching, and server components.',
    level: 'Beginner',
    duration: '6 weeks',
  },
  {
    title: 'Full-Stack Next.js',
    description: 'Master full-stack development with Next.js, including API routes and databases.',
    level: 'Intermediate',
    duration: '8 weeks',
  },
  {
    title: 'Enterprise Next.js',
    description: 'Build scalable applications with Next.js, including authentication and deployment.',
    level: 'Advanced',
    duration: '10 weeks',
  },
];

const nextjsProjects = [
  {
    title: 'Blog Platform',
    description: 'Create a modern blog platform with Next.js and MDX.',
    youtubeUrl: '#',
  },
  {
    title: 'E-commerce Store',
    description: 'Build a full-featured e-commerce store with Next.js and Stripe.',
    youtubeUrl: '#',
  },
  {
    title: 'Dashboard Application',
    description: 'Develop a real-time dashboard with Next.js and Vercel.',
    youtubeUrl: '#',
  },
  {
    title: 'Social Platform',
    description: 'Create a social media platform with Next.js and authentication.',
    youtubeUrl: '#',
  },
];

export default function NextjsPage() {
  return (
    <LanguagePage
      title="Learn Next.js"
      description="Next.js is the leading React framework for production-ready applications. It offers features like server-side rendering, static site generation, and API routes out of the box."
      courses={nextjsCourses}
      projects={nextjsProjects}
    />
  );
} 