import LanguagePage from '@/components/LanguagePage';

const reactCourses = [
  {
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React, including components, props, state, and hooks.',
    level: 'Beginner',
    duration: '6 weeks',
  },
  {
    title: 'Advanced React Patterns',
    description: 'Master advanced React patterns, state management, and performance optimization.',
    level: 'Intermediate',
    duration: '8 weeks',
  },
  {
    title: 'Full-Stack React',
    description: 'Build complete applications with React, Node.js, and modern databases.',
    level: 'Advanced',
    duration: '10 weeks',
  },
];

const reactProjects = [
  {
    title: 'Social Media Dashboard',
    description: 'Create a responsive social media dashboard with React and CSS Grid.',
    youtubeUrl: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Build an e-commerce platform with React, Redux, and Firebase.',
    youtubeUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'Develop a project management tool with drag-and-drop task boards.',
    youtubeUrl: '#',
  },
  {
    title: 'Real-time Chat Application',
    description: 'Create a real-time chat application using React and WebSocket.',
    youtubeUrl: '#',
  },
];

export default function ReactPage() {
  return (
    <LanguagePage
      title="Learn React"
      description="React is a powerful JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it perfect for creating modern, interactive web applications."
      courses={reactCourses}
      projects={reactProjects}
    />
  );
} 