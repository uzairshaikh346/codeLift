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
    description: 'Build a command-line todo list manager using Python.',
    youtubeUrl: 'https://youtu.be/TzlcavuwNvo?si=BIiH-I_XO7fKkpJS',
  },
  {
    title: 'Weather Dashboard',
    description: 'Create a weather dashboard using Python and a weather API.',
    youtubeUrl: 'https://github.com/Ahmedkhang/Project_04/blob/main/Assignment_1/06_weather_api/main.py',
  },
  {
    title: 'Library Manager',
    description: 'Develop a web scraper to collect and analyze data from websites.',
    youtubeUrl: 'https://github.com/uzairshaikh346/Personal_library_book_manager.git',
  },
  {
    title: 'Joke Generator',
    description: 'Build a Joke Bot Generator where user can get random Programming Jokes.',
    youtubeUrl: 'https://github.com/Ahmedkhang/Project_04/blob/main/Assignment_1/00_basics/00_joke_bot.py',
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