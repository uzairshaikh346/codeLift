'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/python', label: 'Python' },
    { href: '/javascript', label: 'JavaScript' },
    { href: '/react', label: 'React' },
    { href: '/nextjs', label: 'Next.js' },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-400">CodeLift</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-indigo-400 border-b-2 border-indigo-400'
                    : 'text-gray-300 hover:text-indigo-400'
                } transition-colors duration-200 py-2`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 