import LanguagePage from '@/components/LanguagePage';

const javascriptCourses = [
  {
    title: 'JavaScript Essentials',
    description: 'Master the fundamentals of JavaScript, including variables, functions, objects, and DOM manipulation.',
    level: 'Beginner',
    duration: '6 weeks',
  },
  {
    title: 'Modern JavaScript',
    description: 'Learn ES6+ features, async programming, and modern JavaScript patterns.',
    level: 'Intermediate',
    duration: '8 weeks',
  },
  {
    title: 'Full-Stack JavaScript',
    description: 'Build complete web applications using Node.js and Express.',
    level: 'Advanced',
    duration: '12 weeks',
  },
];

const javascriptProjects = [
  {
    title: 'Interactive Quiz App',
    description: 'Create a dynamic quiz application with JavaScript and local storage.',
    youtubeUrl: '#',
  },
  {
    title: 'Task Manager',
    description: 'Build a task management application with drag-and-drop functionality.',
    youtubeUrl: '#',
  },
  {
    title: 'Real-time Chat',
    description: 'Develop a real-time chat application using WebSocket and Node.js.',
    youtubeUrl: '#',
  },
  {
    title: 'E-commerce Store',
    description: 'Create a simple e-commerce store with shopping cart functionality.',
    youtubeUrl: '#',
  },
];

export default function JavaScriptPage() {
  return (
    <LanguagePage
      title="Learn JavaScript"
      description="JavaScript is the language of the web, powering interactive and dynamic websites. Essential for front-end development and increasingly popular for back-end development with Node.js."
      courses={javascriptCourses}
      projects={javascriptProjects}
    />
  );
} 