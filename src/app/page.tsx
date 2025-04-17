import Link from 'next/link';

const languages = [
  {
    name: 'Python',
    description: 'Perfect for beginners, Python offers a gentle learning curve and powerful capabilities.',
    href: '/python',
    color: 'bg-blue-500',
  },
  {
    name: 'JavaScript',
    description: 'The language of the web, essential for modern web development.',
    href: '/javascript',
    color: 'bg-yellow-500',
  },
  {
    name: 'React',
    description: 'Build interactive user interfaces with the most popular frontend library.',
    href: '/react',
    color: 'bg-cyan-500',
  },
  {
    name: 'Next.js',
    description: 'Create full-stack web applications with the power of React and more.',
    href: '/nextjs',
    color: 'bg-black',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn. Build. Grow.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Master programming through curated courses and hands-on projects.
              Start your coding journey today with CodeLift.
            </p>
            <Link
              href="/python"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((language) => (
            <Link
              key={language.name}
              href={language.href}
              className="group block"
            >
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className={`${language.color} h-2`} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {language.name}
                  </h3>
                  <p className="text-gray-600">
                    {language.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
