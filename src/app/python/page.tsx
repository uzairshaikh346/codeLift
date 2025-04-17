import LanguagePage from '@/components/LanguagePage';

const pythonCourses = [
  {
    title: 'Python Fundamentals',
    description: 'Learn the basics of Python programming, including variables, data types, control flow, and functions.',
    level: 'Beginner',
    duration: '6 weeks',
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Master essential data structures and algorithms using Python.',
    level: 'Intermediate',
    duration: '8 weeks',
  },
  {
    title: 'Web Development with Django',
    description: 'Build web applications using the Django framework.',
    level: 'Advanced',
    duration: '10 weeks',
  },
];

const pythonProjects = [
  {
    title: 'Todo List Application',
    description: 'Build a command-line todo list manager using Python and SQLite.',
    youtubeUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Create a weather dashboard using Python and a weather API.',
    youtubeUrl: '#',
  },
  {
    title: 'Web Scraper',
    description: 'Develop a web scraper to collect and analyze data from websites.',
    youtubeUrl: '#',
  },
  {
    title: 'Chat Application',
    description: 'Build a real-time chat application using Python and WebSocket.',
    youtubeUrl: '#',
  },
];

export default function PythonPage() {
  return (
    <LanguagePage
      title="Learn Python"
      description="Python is a versatile, beginner-friendly programming language known for its simplicity and readability. Perfect for web development, data science, automation, and more."
      courses={pythonCourses}
      projects={pythonProjects}
    />
  );
} 