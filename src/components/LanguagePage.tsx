'use client';

interface Course {
  title: string;
  description: string;
  level: string;
  duration: string;
}

interface Project {
  title: string;
  description: string;
  youtubeUrl: string;
}

interface LanguagePageProps {
  title: string;
  description: string;
  courses: Course[];
  projects: Project[];
}

const LanguagePage = ({ title, description, courses, projects }: LanguagePageProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Courses Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Practice Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
              >
                Watch Tutorial
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LanguagePage; 