'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand-50/80 backdrop-blur-md border-b border-sand-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-sm font-medium text-ink-400 hover:text-ink-300 transition-colors"
          >
            Sean Hoe
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-ink-100 hover:text-ink-300 transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/#projects"
              className="text-sm text-ink-100 hover:text-ink-300 transition-colors duration-200"
            >
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
