'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleContactClick = (e) => {
    if (pathname === '/') {
      // If we're on homepage, scroll to contact section
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-foreground/10 p-4">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-mono text-lg hover:text-purple-500 transition-colors">
          Sandrooooooo
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            Résumé
          </a>
          <Link href="/about" className="hover:text-purple-500 transition-colors">
            About
          </Link>
          <Link 
            href={pathname === '/' ? '#contact' : '/contact'}
            onClick={handleContactClick}
            className="hover:text-purple-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 space-y-4">
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-purple-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Résumé
          </a>
          <Link 
            href="/about" 
            className="block hover:text-purple-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href={pathname === '/' ? '#contact' : '/contact'}
            className="block hover:text-purple-500 transition-colors"
            onClick={handleContactClick}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

