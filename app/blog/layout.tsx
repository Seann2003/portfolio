import type { ReactNode } from 'react';
import { Header } from '@/components/header';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <footer className="border-t border-sand-300 py-10 px-6 sm:px-12 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ink-50">
            © {new Date().getFullYear()} Sean Hoe. All rights reserved.
          </p>
          <p className="text-xs text-ink-50/70">
            Building on the future of finance
          </p>
        </div>
      </footer>
    </>
  );
}
